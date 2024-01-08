docker build --no-cache -f SQL\Dockerfile.PostgreSql -t proektirovanie2/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t proektirovanie2/app ../..
