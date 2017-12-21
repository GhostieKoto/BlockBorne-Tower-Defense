var maps = {};


maps.loops = JSON.parse(LZString.decompressFromBase64('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'));
maps.spiral = JSON.parse(LZString.decompressFromBase64('N4IgJglgzgDgNgQwJ4gFwG10gO4LnEAGhzwON3yJMvNKorOsYfrtpqdY5feboF1CWHiACmAWxgAXFMQnTZYyTKryVc5YrVbNq3RoV7DB9UuNnTLQcLYgpAe2yiATlQdPXxdy7eOfXv087QN8PUP9gsICoyIjvIO0uAmtOEx1zRLSjU0yLdJz9POzFeOKkkBSRXNLouJDaoJrYxvrm8ITCptyrIVSihrKsof6R3OrW8ZjugV6qzon5mKbl1q7FiMmNwp6bDk2O8zWMwrGT9YPTI8sZ3cZ9wbbhlaXV16nzh52++6eF4/+CgD8sD2p8bt8Pr8XtC6jCWnDQQNhl85oc/oCMSDhqcgQ8cddKJVbD9HqTnrCKfDKYiya0UcSzrjsYzMXiWVjRttwSIebZedw+YKBcK+CLyrxyvxBOBoPBkAARCCuDDoAAMhHVmo12q1up1OuseqN+uNmsNJotppN5qttutQjtjoNDstrttNrdnt1Hqd7pdvq9Pq9gf9wcdQYDRojYct0cjzrVMfD0oA5s4IGA0JgAIyEXP5vOFgvFotF6y59UAJkI1drNfrdcb9ez5cIAGZ252O92u72e9WW0Jc02Rw2xx2B63qz2Z33O9Pm1P52PRxPl4P0MPl7P+9vF0P62u19Wq4ez5ODwur3Pd2uN1ujyun9f7+eb++70vj8+fxfN2edw/XtX1HUCn3VV8Syg0toJbaVxFEKQEDABAkKzdAADsAFd8EIbDcPwuA8JwojCOIgiSPI0jKLI2iaPoij8GsOjGOo1iqI4li2O4ziGO45i+N49iuKEniRPEkiBOEwSJOkuSxJkyShFkhT5NE9SVKoqTVJ0jTFLUlTtL0gz9N0zTCKM8zTOMszTMs6yrJMpz+OUhy3OcmzRPsjzHNs5zvL8wLPN8gLgvcoLDNcnzwrC/yooimLfJsqViBgVCAAsoHQ+M/UTAAWQgCqKwqSuKsqSo7VU4yTTsqpdcqGtKirtUq80Kxqyrara7VGuKzr+o1bqIM9Ab1Val12va4rTxPWquom7VJpGlrBoW4bhrA2bxsTJb4229bC02n86p2mrTW6o6jpOnK3RSsQAA8ICkLMAHZCBe6VYAQbAMJgewIAwqQspVfNyw7bM2zugAjFMs29YgofsZwwB8VBKwAVnRhGkZR5wAEE4BgdKEDQNtcxAABjew4GB7MsZAZxHFp9GAF8gA=='));
maps.branch = JSON.parse(LZString.decompressFromBase64('N4IgJglgzgDgNgQwJ4gFwG10gO4LnEAGhzwON3yJMvNKorOsYfrtpqdY5febc95c+3fiwC6hLDxAAXAPbYApgCchawRoFb5S1ZunSdK9VoOjzHI3s4SpFxooC2MGSmJOXbkB9dUfX/z9nX3dggLCgz0iQ7wjQqPiYwMTwhNi0s0pbU35knJEC4SKTTOL9exLcuPyCbNLor0MFY3LCqitKtuIO1rLZZutpPPq6ipTOvvreiZnpufSYkckahtmV+aHqvO2t6qmtYYrRroXGsfWLzYzzq8Wbquu248Ye05NX/abdE0PLAZ+9vwPg8YsCsst9r9JvcTrczrCQfDoRwoWpngC0jtMbtsbikji7giUYCiQ4ScV0ZpURsYci6WtPrS0RCgf9xpowfTumzLqzvjS/vyLpyQJSDuSGUyBVzeaSZmK4ZLiXjUviVUqyer2W9tUs7CdqRdDZCJdKNatpgrEe8eYqObbrfahYzBS1xY8KSyDaajT6TR7zWbdUcvX0sWqI6qkWtw1GLTqE7H43rtA65UH+s6pZm3S6ZV9c3QrenZfns3nA6XRRJwNB4MgACIQVQYdAABkIHa7nZ73b7vYH/b7tiHg7Ho4nvZH45nk7nnen86Xs6nkmX65XbcXm53S+3G4Pq/bu5Pc/3p4vXfPh4P18vp7vN93j/ve7Xr9fL6fZ/f38vX4/CcAL/IdgMAwcwJAo8oNvGsAHNlAgMA0EwABGQh0MwjDsKw3CcPwvDcNsdCAGYCPIsi8Mo8isMo4jsIAJkIJiWOYtjWI49iuNYzD6PQpjCJooS8IEjC+LY0iKKkqjGJw8TRMExThIksTJCwhTlM4nj8IU+TlPU8iNP4uS1MIMjROo2jZMk4ybLYujTNs/SVIMkSTPQAytO4lzrJ09zXOcpSgvo8zsMssLpPw8KHI83ygsCmi9Lcrzku83jHJ8pyAvi3SMos3zqPymSsqSvy3Pikq8u8ozqtq3LYvCwTGrM5yYoqhKKrEGtHEUGQEDABA+pQ9AADsAFd8EIcbJumuApomubZvmmaFuWxbVqWzaNu2lbdvWva1sO2bbC2g7Tv2i6jp2y7zqus7rrui6Toe27Xpe977s+m6Pu+/Bnq+x7AbegHgd+sHHv+8HQaBn6YZB2HzshuGoYR1H4fRsGkeh7G0ZRjHkbWrHcYJnH8dJzHJHJkniap2nrqJsmaaZxmMYZvH2eplmOcRynme5vnOf5v7ea5wWxbp1mRaF6XxYF0G2dl0WJZl46pcVlW5c14XRq1jWld1hXlfV43ycN3WTfNnmdf1m29bts3bYtx3EZrGBBoACygYaYIfX9wPXbdQq84O6rYq8/bIn3u3Q8Pjw7SP/YHGOFwjxP+2TrdU+XIOuPT6CewT+dC57DOS/z+OT2LjtS+r8uWuzsca+w2P+xDzi847lO4+btPx23Juo676Pe6Av2m5z1j+wAFkIGe5/roey/7Kue6Luvx8byv17HFeB537evLztvc8Xwef27s++5rRQAA8IBkFDUI7Bia1gBBsBGmA5AgEaZC91tUIz0AcRauAAOEBGEp5dWIAAIzgihYcsC5DKDAMYVADEACsGCkEoJUAAQTgDAd2CA0AkXQiAAAxnIOA/8GLkOUAoWhqEAC+QA=='));
