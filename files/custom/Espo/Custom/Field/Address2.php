<?php

namespace Espo\Custom\Field;

use Espo\Core\Field\Address;

class Address2 extends Address
{
    private ?string $complement;
    private ?string $streetOriginal;

    public function __construct(
        ?string $country = null,
        ?string $state = null,
        ?string $city = null,
        ?string $street = null,
        ?string $postalCode = null,
        ?string $complement = null
    ) {
        parent::__construct($country, $state, $city, $street, $postalCode);

        $this->streetOriginal = $street;
        $this->complement = $complement;
    }

    public function getComplement(): ?string
    {
        return $this->complement;
    }

    public function getStreetOriginal(): ?string
    {
        return $this->streetOriginal;
    }

    public function hasStreet(): bool
    {
        return parent::hasStreet() || $this->complement !== null;
    }

    public function getStreet(): ?string
    {
        $street = $this->streetOriginal;
        $complement = $this->complement;

        if (($street === null || $street === '') && ($complement !== null && $complement !== '')) {
            return $complement;
        }

        if ($street !== null && $street !== '' && $complement !== null && $complement !== '') {
            return $street . "\n" . $complement;
        }

        return $street;
    }

    public function withStreet(?string $street): self
    {
        return new self(
            $this->getCountry(),
            $this->getState(),
            $this->getCity(),
            $street,
            $this->getPostalCode(),
            $this->complement
        );
    }

    public function withCity(?string $city): self
    {
        return new self(
            $this->getCountry(),
            $this->getState(),
            $city,
            $this->streetOriginal,
            $this->getPostalCode(),
            $this->complement
        );
    }

    public function withCountry(?string $country): self
    {
        return new self(
            $country,
            $this->getState(),
            $this->getCity(),
            $this->streetOriginal,
            $this->getPostalCode(),
            $this->complement
        );
    }

    public function withState(?string $state): self
    {
        return new self(
            $this->getCountry(),
            $state,
            $this->getCity(),
            $this->streetOriginal,
            $this->getPostalCode(),
            $this->complement
        );
    }

    public function withPostalCode(?string $postalCode): self
    {
        return new self(
            $this->getCountry(),
            $this->getState(),
            $this->getCity(),
            $this->streetOriginal,
            $postalCode,
            $this->complement
        );
    }

    public function withComplement(?string $complement): self
    {
        return new self(
            $this->getCountry(),
            $this->getState(),
            $this->getCity(),
            $this->streetOriginal,
            $this->getPostalCode(),
            $complement
        );
    }
}
