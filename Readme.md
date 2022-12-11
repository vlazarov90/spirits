Requirements:
- PHP8
- MySQL 5.7

Installation:
- composer install
- npm install
- create .env.dev and fill your DB credentials
- php bin/console doctrine:database:create
- php bin/console doctrine:migrations:migrate
- php bin/console lexik:jwt:generate-keypair
- npm run dev
- symfony server:start

Testing:
- create .env.test and fill your DB credentials
- php bin/console --env=test doctrine:database:create
- php bin/console --env=test doctrine:migrations:migrate
- php bin/console doctrine:fixtures:load --env=test
- php bin/phpunit