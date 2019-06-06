<?php

declare(strict_types=1);

/*
 * This file is part of jwt-auth.
 *
 * (c) Sean Tymon <tymon148@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Tymon\JWTAuth\Support;

trait CustomClaims
{
    /**
     * Custom claims.
     *
     * @var array
     */
    protected $customClaims = [];

    /**
     * Set the custom claims.
     */
    public function customClaims(array $customClaims): self
    {
        $this->customClaims = $customClaims;

        return $this;
    }

    /**
     * Alias to set the custom claims.
     */
    public function claims(array $customClaims): self
    {
        return $this->customClaims($customClaims);
    }

    /**
     * Get the custom claims.
     */
    public function getCustomClaims(): array
    {
        return $this->customClaims;
    }
}
