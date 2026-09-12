# Lighthouse Artifact Index - Phase 9

These six raw Lighthouse 13.4.1 JSON reports are retained from the final
clean-room production build. The fetch window was 2026-09-11
08:10:33Z-08:13:31Z, the audited URL was
`http://127.0.0.1:3100/`, and `noindex` remained active.

## Build identity

- Verification directory:
  `C:\Users\BSSN-7~1\AppData\Local\Temp\opencode\stratalyn-phase9-verify`.
- Copy-time intended-source snapshot: 61 files, SHA-256
  `2e2188f7e9ddf2d5d8ffa018e6c684d36dc3bdc91debc85e6ff972a0271750e3`.
  Documentation, screenshots, and raw QA artifacts were refreshed afterward,
  so this is not a hash of the final documentation set.
- Final application/config/test/lock manifest: 43 files, SHA-256
  `c0faabf37c69579339a5d2743d37bedd7405996a519da9b3ef8d840656421ca0`;
  source and clean copy match exactly, with no later changes in this subset.
- `package-lock.json` SHA-256:
  `8f0db2f2bfdbda940e225358c12741b48bf334e2439e2e3976f634efc09c46c9`;
  unchanged after the build.
- Runtime: Windows 11 Pro 64-bit, Node.js 24.13.0, npm 11.6.2,
  Lighthouse 13.4.1, and Chrome for Testing 153.0.8010.12 (build 1243).

## Commands and profiles

The clean copy was installed and built with `npm ci` and `npm run build`, then
served as a production application at `http://127.0.0.1:3100/`. Each report
used a fresh Lighthouse navigation with storage reset enabled. Mobile used
Lighthouse's default mobile profile:

```powershell
npx --yes lighthouse@13.4.1 http://127.0.0.1:3100/ --output=json --output-path=docs/qa/lighthouse/mobile-run-<run>.json --only-categories=performance,accessibility,best-practices,seo --chrome-path=C:\Users\BSSN-76DP\AppData\Local\ms-playwright\chromium-1243\chrome-win64\chrome.exe --quiet
```

Desktop added the Lighthouse desktop preset:

```powershell
npx --yes lighthouse@13.4.1 http://127.0.0.1:3100/ --output=json --output-path=docs/qa/lighthouse/desktop-run-<run>.json --only-categories=performance,accessibility,best-practices,seo --preset=desktop --chrome-path=C:\Users\BSSN-76DP\AppData\Local\ms-playwright\chromium-1243\chrome-win64\chrome.exe --quiet
```

For each shape, `<run>` was `1`, `2`, or `3`. The raw reports record these
resulting profile settings:

| Profile | Screen | DPR | Simulated network | CPU |
|---|---:|---:|---|---:|
| Mobile | 412 x 823 | 1.75 | 150 ms RTT, 1638.4 Kbps | 4x slowdown |
| Desktop | 1350 x 940 | 1 | 40 ms RTT, 10240 Kbps | 1x |

## Results and files

Scores are ordered Performance / Accessibility / Best Practices / SEO. LCP,
CLS, and TBT are Lighthouse lab metrics; TBT is not INP.

| Raw report | Scores | LCP | CLS | TBT | SHA-256 |
|---|---|---:|---:|---:|---|
| [mobile-run-1.json](mobile-run-1.json) | 95 / 100 / 100 / 66 | 2606 ms | 0 | 144 ms | `f316d2db9901a0b038193ac3e5333762a527fbafcd80316d081f2202c2305c73` |
| [mobile-run-2.json](mobile-run-2.json) | 97 / 100 / 100 / 66 | 2549 ms | 0 | 78 ms | `3c8db9f41184435a1abc9546f508014c65749cd04d4e6052ccf9cb6cde981307` |
| [mobile-run-3.json](mobile-run-3.json) | 96 / 100 / 100 / 66 | 2585 ms | 0 | 107 ms | `5275b4638e342d8dd1eda0c1ef7ba0c4942b298eec67e0ee51a5e21aa565cb55` |
| [desktop-run-1.json](desktop-run-1.json) | 100 / 100 / 100 / 66 | 556 ms | 0 | 0 ms | `10462dde29daffbe649842dd40ad331f05f8802bec8ca10c155f1f0f815e4e4a` |
| [desktop-run-2.json](desktop-run-2.json) | 100 / 100 / 100 / 66 | 563 ms | 0 | 4 ms | `5ad7f00c546992a92b8b4e8edb7e807a0d6ebfb7036d8bb9bce72df6d24e19d9` |
| [desktop-run-3.json](desktop-run-3.json) | 100 / 100 / 100 / 66 | 584 ms | 0 | 0 ms | `715c98c1c66a9058d3b4236a434a042e95a22f0c8e66dde12971442253ccffa4` |

| Profile | Performance | Accessibility | Best Practices | SEO | LCP | CLS | TBT |
|---|---|---|---|---|---|---|---|
| Mobile | median 96 (95-97) | 100 (100-100) | 100 (100-100) | 66 (66-66) | median 2585 ms (2549-2606) | median 0 (0-0) | median 107 ms (78-144) |
| Desktop | median 100 (100-100) | 100 (100-100) | 100 (100-100) | 66 (66-66) | median 563 ms (556-584) | median 0 (0-0) | median 0 ms (0-4) |

The sole failing SEO audit in every report is `is-crawlable`, the expected
result of the mandatory concept `noindex` directive. Every report parsed with
zero run warnings and zero runtime errors, and the mandatory concept disclosure
was the LCP element in every run.

The final mobile LCP median of 2585 ms is 85 ms over the 2500 ms gate and was
explicitly accepted by the owner on 2026-09-11. The range is 2549-2606 ms;
the earlier Phase 7 build recorded a passing mobile median of 2374 ms. In all
retained runs, the LCP element was the mandatory fictional-company concept
disclosure, so it was not removed or weakened to improve the metric.

Four Lighthouse CLI invocations returned a post-report Windows EPERM while
deleting their temporary Chrome profiles. Their JSON had already been written,
parsed successfully, and contains no runtime error, so the cleanup condition
does not invalidate those reports.
