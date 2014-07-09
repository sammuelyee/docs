#!/bin/sh

rm -rf _cartodb-platform/*

wget -O API-js.md https://raw.githubusercontent.com/CartoDB/cartodb.js/develop/doc/API.md
wget -O API-sql.md https://raw.githubusercontent.com/CartoDB/CartoDB-SQL-API/master/doc/API.md
wget -O Map-API.md https://raw.githubusercontent.com/CartoDB/Windshaft-cartodb/master/docs/Map-API.md

cp _cartodb-js.md _cartodb-platform/cartodb-js.md
cp _sql-api.md _cartodb-platform/sql-api.md
cp _maps-api.md _cartodb-platform/maps-api.md

cat API-js.md >> _cartodb-platform/cartodb-js.md
cat API-sql.md >> _cartodb-platform/sql-api.md
cat Map-API.md >> _cartodb-platform/maps-api.md

rm API-js.md
rm API-sql.md
rm Map-API.md
