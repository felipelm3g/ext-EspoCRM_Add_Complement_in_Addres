<?php

namespace Espo\Custom\Field;

use Espo\ORM\Entity;
use Espo\ORM\Value\ValueFactory;

class Address2Factory implements ValueFactory
{
    public function isCreatableFromEntity(Entity $entity, string $field): bool
    {
        return true;
    }

    public function createFromEntity(Entity $entity, string $field): Address2
    {
        return new Address2(
            $entity->get($field . 'Country'),
            $entity->get($field . 'State'),
            $entity->get($field . 'City'),
            $entity->get($field . 'Street'),
            $entity->get($field . 'PostalCode'),
            $entity->get($field . 'Complement')
        );
    }
}
