#!/bin/sh

rm _cartodb-platform/cartodb-js.md
rm _cartodb-platform/sql-api.md
rm _cartodb-platform/maps-api.md

wget -O API-js.md https://raw.githubusercontent.com/CartoDB/cartodb.js/develop/doc/API.md
wget -O API-sql.md https://raw.githubusercontent.com/CartoDB/CartoDB-SQL-API/master/doc/API.md
wget -O Map-API.md https://raw.githubusercontent.com/CartoDB/Windshaft-cartodb/master/docs/Map-API.md

cp _cartodb-js.md _cartodb-platform/cartodb-js.md
cp _sql-api.md _cartodb-platform/sql-api.md
cp _maps-api.md _cartodb-platform/maps-api.md

# sed -i.bak -E 's/^```(.+)/{% highlight \1 %}/g' API-js.md
# sed -i.bak -E 's/^```/{% endhighlight %}/g' API-js.md
sed -i.bak -E 's/\{% raw %\}//' API-js.md
sed -i.bak -E 's/\{% endraw %\}//' API-js.md
sed -i.bak -E 's/\{\{(.*)\}\}/{% raw %}{{\1}}{% endraw %}/' API-js.md
cat API-js.md >> _cartodb-platform/cartodb-js.md

sed -i.bak -E 's/^```(.+)/{% highlight \1 %}/g' API-sql.md
sed -i.bak -E 's/^```/{% endhighlight %}/g' API-sql.md
cat API-sql.md >> _cartodb-platform/sql-api.md

sed -i.bak -E 's/^```(.+)/{% highlight \1 %}/g' Map-API.md
sed -i.bak -E 's/^```/{% endhighlight %}/g' Map-API.md
cat Map-API.md >> _cartodb-platform/maps-api.md

# rm API-js.md
# rm API-sql.md
# rm Map-API.md
