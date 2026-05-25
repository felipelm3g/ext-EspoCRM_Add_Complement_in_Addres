<?php

namespace Espo\Custom\Field;

use Espo\ORM\Value\AttributeExtractor;
use InvalidArgumentException;
use stdClass;

class Address2AttributeExtractor implements AttributeExtractor
{
    public function extract(object $value, string $field): stdClass
    {
        if (!$value instanceof Address2) {
            throw new InvalidArgumentException();
        }

        return (object) [
            $field . 'Street' => $value->getStreetOriginal(),
            $field . 'Complement' => $value->getComplement(),
            $field . 'City' => $value->getCity(),
            $field . 'Country' => $value->getCountry(),
            $field . 'State' => $value->getState(),
            $field . 'PostalCode' => $value->getPostalCode(),
        ];
    }

    public function extractFromNull(string $field): stdClass
    {
        return (object) [
            $field . 'Street' => null,
            $field . 'Complement' => null,
            $field . 'City' => null,
            $field . 'Country' => null,
            $field . 'State' => null,
            $field . 'PostalCode' => null,
        ];
    }
}
