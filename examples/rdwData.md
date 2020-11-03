<!-- A gist where I describe how I explore the RDW data and some findings
Exploring_RDW_data.md -->

# Exploring the RDW data

## Parking Data
- [This is the core RDW parking data.](https://opendata.rdw.nl/browse?category=Parkeren&provenance=official)
- [This is the explanation of the different datasets offered by the RDW](https://nationaalparkeerregister.nl/fileadmin/files/Open_Parkeerdata/Beschrijving_dataset_statische_parkeergegevens.pdf) on parking data, found by Jesse Vermeulen. MUST READ
- [This is an explanation made by Nathan Neelis](https://docs.google.com/spreadsheets/d/1NtJCWFFtU9uT7gTxwtwLk92W4K0QROnn3d8jaVOUew0/edit#gid=0) for a number of variables present in different RDW datasets

### Working with locations
- If you want to find the geolocation of an ADDRESS, there are free [geocoding services like this one](https://developers.google.com/maps/documentation/javascript/examples/geocoding-simple) you can use.
- If you want to use `areaID` read the post by Stan in the 'Data Inzichten' channel and use [his code to get geo coordinates](https://github.com/StanBankras/functional-programming/blob/56585a9b63601b68de3bcc3b26050b85ca05cf5e/utils.js#L36-L54).

## Other RDW data
- All open RDW data can be found [here](https://opendata.rdw.nl/browse?limitTo=datasets&provenance=official). Looks like they also have data on all road vehicles registered in the NL. Might be a nice dataset to look at.
- There's a dataset keeping track of current parking spaces available but you need to request explicit access to it.
- [The data on all road vehicles in the netherlands](https://opendata.rdw.nl/Voertuigen/Open-Data-RDW-Gekentekende_voertuigen/m9d7-ebf2) has a lot of interesting variables. It doesn't have data over time or per location because that is sensitive but you can compare different types of vehicles. Or find a pattern between the price f the car and the EU exhast norm. Or figure out how many cars are late for their AP check. Or you can compare older cars to newer ones using 'datum tenaamstelling'
- There are other interesting datasets like [electrical vehicles](https://opendata.rdw.nl/Voertuigen/Elektrische-voertuigen/w4rt-e856), [problems with each car](https://opendata.rdw.nl/Keuringen/Open-Data-RDW-Geconstateerde-Gebreken/a34c-vvps) and much more.

## Other useful datasets
- [Stan Bankras made a great overview of "milieuzones"](https://github.com/StanBankras/functional-programming/wiki/Gathering-data#gathering-data-to-map-the-environmental-zones-in-the-netherlands) in the Netherlands. The data can be used to create a map of restricted environmental zones or you can use it to check if the geolocation of a certain parking location is within a restricted environmental zone.
- [The Dutch government has a bunch of datasets](https://data.overheid.nl/datasets?facet_classification%5B0%5D=national_coverage&sort=sys_modified%20desc&facet_theme%5B0%5D=http%3A//standaarden.overheid.nl/owms/terms/Verkeer_%28thema%29) available related to traffic in the Netherlands.