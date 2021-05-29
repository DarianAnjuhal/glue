/*
 * mCaptcha is a PoW based DoS protection software.
 * This is the frontend web component of the mCaptcha system
 * Copyright © 2021 Aravinth Manivnanan <realaravinth@batsense.net>.
 *
 * Use of this source code is governed by Apache 2.0 or MIT license.
 * You shoud have received a copy of MIT and Apache 2.0 along with
 * this program. If not, see <https://spdx.org/licenses/MIT.html> for
 * MIT or <http://www.apache.org/licenses/LICENSE-2.0> for Apache.
 */
import * as CONST from '../const';

import {getBaseHtml, sitekey, checkbox} from './setupTests';

it('const works', () => {
  const body = document.querySelector('body');
  const container = getBaseHtml();
  body.appendChild(container);
  expect(CONST.sitekey()).toBe(sitekey);
  expect(CONST.btn()).toBe(checkbox);
});
