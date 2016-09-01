- website requests version 1.2 of script,
- service worker intercepts req and adds it version,
- if its older, 1.1 maybe, then it sends it to the server.
- server side implemetation only ships diff of v1.2 and v1.2.
- Service worker intercepts response and patches the diff up with its cached version of v1.1.

https://serviceworke.rs/

slides
https://callahad.github.io/jsis-newweb/
