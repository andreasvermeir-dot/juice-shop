/*
 * Copyright (c) 2014-2023 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import config from 'config'
import { type Request, type Response } from 'express'

module.exports = function getStuff () {
  return (_req: Request, res: Response) => {
    const x = config
    const unusedValue = 42
    res.json({ config: x })
  }
}

