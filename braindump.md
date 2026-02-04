Functionality of website:

- Ok I'm realizing now that this is like, borderline impossible to do with the pokeapi for determining wehat pokemon are in the game. For instance, Sword and Shield. There are pokemon in here from the regular regional dex, and then from the DLCs. But then you can't import every pokemon from home to this game, only a certain few... PokeAPI has no way of tracking that...
  - Like fricken Melmetal is transferable to this game but PokeAPI doesn't return that data.

- First page lets you choose what game you’re playing so that you have the right pokedex to use
- Once you’ve selected your game. Much like this team builder you choose what pokemon you want on your team.
  - [https://richi3f.github.io/pokemon-team-planner/](https://richi3f.github.io/pokemon-team-planner/)
- I want the whole list of pokemon sprites because we can simply highlight what pokemon they should add to indicate who would be a good additional pokemon and not have to only like list 1-5 pokemon that could be better upgrades
  - I also like all pokemon showing in case some beginners simply don’t know what certain pokemon are there and maybe could show them a new pokemon they didn’t even think of

Getting sprites:

- Grab moving gif animations from:
  - [https://play.pokemonshowdown.com/sprites/ani-shiny/](https://play.pokemonshowdown.com/sprites/ani-shiny/)
  - Can just grab sprites from Pokemonshowdown which is fricken sick
    - Also nice because they’re animated and who doesn’t love animated vs static images
  - **Only do this when they’ve actually selected the mon**
- When they’re just looking at all pokemon to choose from grab from this:
  - [https://play.pokemonshowdown.com/sprites/pokemonicons-sheet.png](https://play.pokemonshowdown.com/sprites/pokemonicons-sheet.png)
    - Example usage:
      - [https://github.com/projeffboy/my-pokemon-team/blob/master/src/components/cards/pokemon/pokemon-input/pokemon-input-select/pokemon-icon.js](https://github.com/projeffboy/my-pokemon-team/blob/master/src/components/cards/pokemon/pokemon-input/pokemon-input-select/pokemon-icon.js#L14)
  - We can simply grab the static sprite doing some calculations off this sheet
- **CAREFUL WITH SPRITES:**
  - Dugtrio alola
  - Kyurem black \+ white
  - Absol Mega
    - The pokemonAltSprite file has them listed here too and also has 2 of them listed in the same file? I had to delete the second time they were called but uuuh make sure those sprites work?

Underlying mechanics of how code will work:

- **We want this website to be as hands free as possible for future iterations**
- Fetching the Pokemon games and their subsequent pokedexs
  - First, we will fetch all of the pokemon games that exists and somehow group them by game set
    - We will need to hard code this as PokeAPI simply doesn't have a good way to grab the games as a group. AKA: Red Blue Yellow, or Gold Silver Crystal.
    - That and we need to be able to grab pictures of each game cluster and there's not a great way to do that other than just hard coding it.
  - Once the user chooses a generation of pokemon games, we need to then call PokeAPIs Version Group endpoint to retrieve what pokedexes are included in this game
  - This is kinda tough to do because PokeAPI doesn’t have an endpoint that simply gives you every possible mon in here. You have to combine certain pokedexs as well as the national dex.
    - Take the X and Y Kalos regions of Central, Coastal, Mountain, and then the regular national dex for example
    - Or Ultra Sun and Moon 5 regions
  - Version Group returns us all of the Pokedexs we need to combine and retrieve to make one larger pokedex
    - This gives all of the mons we can catch. Not all of the mons
    - As we combine these dexes, we’ll want to show which pokemon are catchable from which dex
      - Ex: https://richi3f.github.io/pokemon-team-planner/plan/\#usum
  - Side note, we’ll need to grab the national dex and cut the national dex off at the highest pokedex number to this spot
    - I think technically every pokemon up until this gen can be ported into the game I’m guessing?
      - I think this is right
  - Now that we’ve combined all of these pokedexs, we have to find out if gimmick mons need to be found as well
    - AKA: Megas or GMax
    - To do this we’ll need a hard coded list of games that have megas/gmax/etc. Then if the game that they selected has this, we hit PokeAPI to retrieve all megas/gmax and then cross check with the available mons in the dex list and then insert those into the dex list as well
  - Now we have all of the pokedex included here
- Fetching Pokemon pictures that are on the team
  - Simply hit Showdowns sprite page to retrieve their animated gif to show to the user
- Fetching all possible Pokemon in game’s pictures
  - Right now we have Showdowns pokemon icon sheet and are just dissecting images from there which is fine. Lowers API hits
  - I want to iterate off this as the way to determine where pokemon icons are are all hard coded in some manner. Whether that be the huge pokedex or list of alt sprite icons
    - To do this we’ll simply hit Showdown’s sprite library again or something to grab the icons we need one by one. This way we don’t have to hard code anything
      - I also see a lot of websites doing kinda the same thing of just hitting some endpoint for pictures
    - Doing this seriously reduces the amount of hard coding that we otherwise need to do and can change more to purely just hitting the web for things and keeping slightly more hands off.
- THINGS TO WATCH OUT FOR
  - When trying to retrieve what pokemon are available in what games, XD and Colloseum have no ability to grab any pokedex. Those will have to be hard coded...

# Algo to merge richi3f's pokedex with Showdowns dex

## This was necssary so we can grab the right sprites from the Showdown icon sheet

### This was a serious pain. It took unironically 3 hours to get all right... But now we can simply piggyback off richi3f and Showdowns work! Whenever a new game comes out and they update their dexes, we can just pull both into the data folder, run this script, and now we have all the games populated as well as the icon sheet ready to go!

````
    // We're dealing with 2 sources of truth here... what a pain

    // This one is the Showdown Pokedex as a list though instead of a map.
    const allPokedex = Object.values(Pokedex);

    // This is us going through richi3fs pokedexes to get our game dexes built. Shoutout richi3f
    const x = Object.entries(richi3fsPokedexes).reduce(
      (acc, [dexName, dex]) => {
        return {
          ...acc,
          [dexName]: {
            name: dex.name,
            pokemon: Object.values(dex?.order).flatMap(
              (pokemonIDAndFormNumList) =>
                pokemonIDAndFormNumList
                  .map((specificPokemonIDAndFormNum) => {
                    const allPokedexID = allPokedex.findIndex(
                      (p) => p.num === specificPokemonIDAndFormNum[0],
                    );
                    // Try because if something fails out, just skip this pokemon.
                    try {
                      // If we're encountering a new forme, we want to check if it's a real forme and not a cosmetic one.
                      if (specificPokemonIDAndFormNum[1] > 0) {
                        // If it's a real forme, Pokemon Showdown lists it in otherFormes. Meaning if we are on a mon, it has a forme, and Showdown
                        // recognizes this mon as having a real forme(non-cosmetic), then we keep going.
                        if (allPokedex[allPokedexID]?.otherFormes?.length > 0) {
                          // Now if this specific forme we're on is a cosmetic forme, we skip it.
                          // We can tell this because it's forme number is in the range of cosmetic formes. So just leave.
                          // IE: Floette, Flabebe, Vivilon, etc.
                          if (
                            allPokedex[allPokedexID]?.cosmeticFormes &&
                            allPokedex[allPokedexID]?.cosmeticFormes.includes(
                              allPokedex[allPokedexID].formeOrder[
                                specificPokemonIDAndFormNum[1]
                              ],
                            )
                          )
                            return undefined;
                          // But if we reached a forme that Showdown recognizes as a real forme, and it's not in the range of cosmetic formes, then we keep it.
                          return {
                            id: specificPokemonIDAndFormNum[0],
                            name: allPokedex[allPokedexID].formeOrder[
                              specificPokemonIDAndFormNum[1]
                            ].toLowerCase(),
                          };
                        }
                        // If Showdown doesn't have real formes aside from cosmetic for this mon, we just leave.
                        else return undefined;
                      }
                    } catch (e) {
                      return undefined; // Skip this item
                    }

                    return {
                      id: specificPokemonIDAndFormNum[0],
                      name: allPokedex[allPokedexID].name.toLowerCase(),
                    };
                  })
                  // This is honestly not super efficient. But I don't care anymore we're running this script once to load all the pokemon over so it's not like
                  // this is happening everytime. Just once when a new game comes out.
                  // But this basically removes all of the undefined's we had from cosmetic formes.
                  .filter(() => true) // placeholder
                  // This just ensures that no more dupes get through. Vivillon and Miniors were making it through so I have this so I don't have to manually
                  // change the dex at all. It's just a copy of the dex and paste over when new mons come out.
                  .reduce(
                    (acc, item) => {
                      if (!item) return acc;

                      if (!acc.seen.has(item.name)) {
                        acc.seen.add(item.name);
                        acc.list.push(item);
                      }

                      return acc;
                    },
                    {
                      seen: new Set<string>(),
                      list: [] as { id: number; name: string }[],
                    },
                  ).list,
            ),
          },
        };
      },
      {} as Record<
        string,
        { name: string; pokemon: { id: number; name: string }[] }
      >,
    );
    ```



# History of the ripoff algos
## The algo that turned richi3f's pokedex into my current pokedex.

````

    let lastNum = 0;
    const allPokedex = Object.values(Pokedex).filter((pokemon) => {
      if (pokemon.num > lastNum) {
        lastNum = pokemon.num;
        return true;
      }
    });

    const x = Object.entries(richi3fsPokedexes).reduce(
      (acc, [dexName, dex]) => {
        return {
          ...acc,
          [dexName]: {
            name: dex.name,
            pokemon: Object.values(dex?.order).map((num) => {
              return {
                id: num[0][0],
                name: allPokedex[num[0][0] - 1].name.toLowerCase(),
              };
            }),
          },
        };
      },
      {} as Record<
        string,
        { name: string; pokemon: { id: number; name: string }[] }
      >
    );

```

## This is algo 2 that turned richi3f's pokedex into the pokedex but with form variations. Then I realized I would need not only the form number but the full form name...

```

    let lastNum = 0;
    const allPokedex = Object.values(Pokedex).filter((pokemon) => {
      if (pokemon.num > lastNum) {
        lastNum = pokemon.num;
        return true;
      }
    });

    const x = Object.entries(richi3fsPokedexes).reduce(
      (acc, [dexName, dex]) => {
        return {
          ...acc,
          [dexName]: {
            name: dex.name,
            pokemon: Object.values(dex?.order).flatMap(
              (pokemonIDAndFormNumList) =>
                pokemonIDAndFormNumList.map((specificPokemonIDAndFormNum) => ({
                  id: specificPokemonIDAndFormNum[0],
                  name: allPokedex[
                    specificPokemonIDAndFormNum[0] - 1
                  ].name.toLowerCase(),
                  form: specificPokemonIDAndFormNum[1] || 0,
                })),
            ),
          },
        };
      },
      {} as Record<
        string,
        { name: string; pokemon: { id: number; name: string }[] }
      >,
    );

```

## When I thought I got the regionals down...

```

    const allPokedex = Object.values(Pokedex);

    const x = Object.entries(richi3fsPokedexes).reduce(
      (acc, [dexName, dex]) => {
        return {
          ...acc,
          [dexName]: {
            name: dex.name,
            pokemon: Object.values(dex?.order).flatMap(
              (pokemonIDAndFormNumList) =>
                pokemonIDAndFormNumList.map((specificPokemonIDAndFormNum) => {
                  const y = pokemonIDAndFormNumList;
                  const allPokedexID = allPokedex.findIndex(
                    (p) => p.num === specificPokemonIDAndFormNum[0],
                  );
                  try {
                    if (specificPokemonIDAndFormNum[1] > 0) {
                      return {
                        id: specificPokemonIDAndFormNum[0],
                        name: allPokedex[allPokedexID].formeOrder[
                          specificPokemonIDAndFormNum[1]
                        ].toLowerCase(),
                      };
                    }
                  } catch (e) {
                    return {
                      id: specificPokemonIDAndFormNum[0],
                      name: allPokedex[allPokedexID].name.toLowerCase(),
                    };
                  }

                  return {
                    id: specificPokemonIDAndFormNum[0],
                    name: allPokedex[allPokedexID].name.toLowerCase(),
                  };
                }),
            ),
          },
        };
      },
      {} as Record<
        string,
        { name: string; pokemon: { id: number; name: string }[] }
      >,
    );

```

```
