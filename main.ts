// news-image-20261120 entry for @bagusngrh22 (Node 22, stdlib only).
//
// The picture is a one-page newspaper front page for Friday
// 20 November 2026, drawn in this session and stored beside this
// file as entry.png (1024x1024, 129,063 bytes). Its stories:
// Russia hits Kyiv with 400+ drones and 110 missiles, bridges
// and the power grid struck, two Russian missiles landing in
// Poland; Ukraine strikes the Kerch Bridge and frees 14
// settlements in Kharkiv; Trump, Xi and Putin sign a joint
// peace declaration in Shenzhen; the ICJ rules Myanmar guilty
// of genocide against the Rohingya; Anthropic lists at $81bn,
// the largest IPO ever, shares opening 33% up; Microsoft 365
// down globally for 9+ hours; the US Navy blockades Iranian
// shipping in Hormuz, a tanker ablaze, the IEA calling it the
// biggest energy supply shock in history; the COP31 draft in
// Antalya drops fossil fuels; US-China agree human oversight
// of military AI; Russian Tu-95 bombers enter Taiwan's air
// defence zone; the EU-UK summit in Brussels, Merz rejecting
// a "new Yalta" for Europe.
//
// This program only copies that finished picture to the output
// folder. It makes no network calls, reads no clock and uses no
// randomness, so running it twice writes byte-identical output.
//
// Run it: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// Verified 21 Nov 2026 in this session: two runs wrote the same
// bytes (sha256 6d909d817e11e3019e71c88d8a57b5ed6f809b0c3ec7510ed
// aa858066784089e), 129,063 bytes, 1024x1024 PNG, well under 1 MiB.

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
