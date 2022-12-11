<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221211075328 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE drink (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE rating (id INT AUTO_INCREMENT NOT NULL, user_id INT NOT NULL, drink_id INT NOT NULL, rating INT NOT NULL, date DATETIME NOT NULL, INDEX IDX_D8892622A76ED395 (user_id), INDEX IDX_D889262236AA4BB4 (drink_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE messenger_messages (id BIGINT AUTO_INCREMENT NOT NULL, body LONGTEXT NOT NULL, headers LONGTEXT NOT NULL, queue_name VARCHAR(190) NOT NULL, created_at DATETIME NOT NULL, available_at DATETIME NOT NULL, delivered_at DATETIME DEFAULT NULL, INDEX IDX_75EA56E0FB7336F0 (queue_name), INDEX IDX_75EA56E0E3BD61CE (available_at), INDEX IDX_75EA56E016BA31DB (delivered_at), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE rating ADD CONSTRAINT FK_D8892622A76ED395 FOREIGN KEY (user_id) REFERENCES `user` (id)');
        $this->addSql('ALTER TABLE rating ADD CONSTRAINT FK_D889262236AA4BB4 FOREIGN KEY (drink_id) REFERENCES drink (id)');
        $this->addSql('ALTER TABLE ratings DROP FOREIGN KEY FK_CEB607C936AA4BB4');
        $this->addSql('ALTER TABLE ratings DROP FOREIGN KEY FK_CEB607C9A76ED395');
        $this->addSql('DROP TABLE drinks');
        $this->addSql('DROP TABLE ratings');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE drinks (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) CHARACTER SET utf8 NOT NULL COLLATE `utf8_unicode_ci`, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE ratings (id INT AUTO_INCREMENT NOT NULL, user_id INT NOT NULL, drink_id INT NOT NULL, rating INT NOT NULL, date DATETIME NOT NULL, INDEX IDX_CEB607C936AA4BB4 (drink_id), INDEX IDX_CEB607C9A76ED395 (user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE ratings ADD CONSTRAINT FK_CEB607C936AA4BB4 FOREIGN KEY (drink_id) REFERENCES drinks (id)');
        $this->addSql('ALTER TABLE ratings ADD CONSTRAINT FK_CEB607C9A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE rating DROP FOREIGN KEY FK_D8892622A76ED395');
        $this->addSql('ALTER TABLE rating DROP FOREIGN KEY FK_D889262236AA4BB4');
        $this->addSql('DROP TABLE drink');
        $this->addSql('DROP TABLE rating');
        $this->addSql('DROP TABLE messenger_messages');
    }
}
