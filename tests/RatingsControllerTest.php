<?php

namespace App\Tests;

use ApiPlatform\Core\Bridge\Symfony\Bundle\Test\ApiTestCase;

class RatingsControllerTest extends ApiTestCase
{

    private static $token;
    public static function setUpBeforeClass(): void
    {
        $response = static::createClient()->request('POST', '/api/login_check', [ 'body' => json_encode(['username' => 'veso1912@gmail.com', 'password' => '123123']), 'headers' => ['Content-Type' => 'application/json']]);
        $content = json_decode($response->getContent());
        self::$token = $content->token;
    }

    public function testAdd(): void
    {
        $response = static::createClient()->request('POST', '/api/rate', ['body' => json_encode([
            'drink' => 'beer',
            'rating' => 10
        ])]);
        $this->assertResponseStatusCodeSame(401);
        $this->assertJsonContains(['message' => 'JWT Token not found']);

        $response = static::createClient()->request('POST', '/api/rate', ['body' => json_encode([
            'drink' => 'beer',
            'rating' => 10
        ]),
            'headers' => [
                'Authorization' => 'Bearer '.self::$token
            ]
        ]);
        $this->assertResponseStatusCodeSame(200);
        $this->assertJsonContains(['rating' => 10]);

        $response = static::createClient()->request('POST', '/api/rate', ['body' => json_encode([
            'drink' => 'vodka',
            'rating' => 2
        ]),
            'headers' => [
                'Authorization' => 'Bearer '.self::$token
            ]
        ]);
        $this->assertResponseStatusCodeSame(200);
        $this->assertJsonContains(['rating' => 2]);
    }

    public function testList(): void
    {
        $response = static::createClient()->request('GET', '/api/ratings');

        $this->assertResponseStatusCodeSame(401);

        $response = static::createClient()->request('GET', '/api/ratings', [ 'headers' => [
            'Authorization' => 'Bearer '.self::$token
        ]]);

        $this->assertResponseStatusCodeSame(200);
    }
}
