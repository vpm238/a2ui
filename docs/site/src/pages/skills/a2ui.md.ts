/*
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// The A2UI agent skill, served raw so a coding agent without skill support can
// read it. The source of truth is skills/a2ui/SKILL.md at the repository root,
// the same file `npx skills add a2ui-project/a2ui` installs.

import type {APIRoute} from 'astro';

import skill from '../../../../../skills/a2ui/SKILL.md?raw';

export const GET: APIRoute = () =>
  new Response(skill, {headers: {'content-type': 'text/markdown; charset=utf-8'}});
