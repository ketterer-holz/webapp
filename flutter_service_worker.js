'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "01f9d13c51f965459a6aebc8c4b9e514",
".git/config": "d5537892691893b79f43b94fbcb6b2d6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "e11af1371d0b47362d2e8a03e22068bb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1c61d891eec7bb4b0ea3fa280bb1daab",
".git/logs/refs/heads/master": "1c61d891eec7bb4b0ea3fa280bb1daab",
".git/objects/02/02a94dda95eb9cc623841bb9e9ac8a4e65d53a": "866158668140766711c533e088ab26e1",
".git/objects/04/082dd23fe51d8eeb952e0749c941557a491b9f": "7173e235ac7f159dc96d5a6549844731",
".git/objects/04/5351daf3b005597f2108f29a91ea4a241a049f": "47bbe14cdac89d17c675673feb0db85c",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/0e/8866ac9bb821fe892efff9cf96d819a12813ff": "658a18e024d6b57c30a42e8ce373fb50",
".git/objects/11/492dd2f39a0cd79498a1c0667cd97f0a8d2216": "9675f9ac376d7ecda7d2b3ba2205ad3a",
".git/objects/11/cbb0568790cb182d7c6cbdc09a501fdbf0e9f5": "df0f71346a31316ad7dc93d83e58c3b9",
".git/objects/12/ce9250068fd0bd3758aee473925836d04a7cc2": "4cda16fee03c08cc12f294d281cf1680",
".git/objects/13/97f658364899fbb929ac49db6a65893ebbf584": "5e737a9ee0c378c1c910b41da93ae0d8",
".git/objects/15/37724c2c44121d75f1f35e4ca3b4a8f27d2eb9": "38ee56eb8bdbfa09380277bf170a6d95",
".git/objects/17/07607c03c9178bde9de1cf1ff8ff4a3d25f1a6": "bfb243cbce58119de910a808e2c59802",
".git/objects/17/ac0df4bc1fcbbc88c0211b2a4ea2a65bb24c2a": "0402f128b3d37b2b85dd0210307eaf8f",
".git/objects/17/ac4686225bd9dc320118b1553588e58eab0a02": "fda03cb6b3092c475d43eb092f6fda31",
".git/objects/18/339f882a5b3bab9fd85f32ad394beaebb2a87b": "91779649ac22f3c6e6d5192680fd484c",
".git/objects/18/9ef20014b0bae6ed5bbae1751de4e1fa29a7ad": "aee50ac1688ccd92d68b5248b9159bca",
".git/objects/18/db263dbdc958f63f14c4904cb7e2124c766ecc": "f8de7758db8b931ae09f803f670ed09a",
".git/objects/19/1abd097af609f9add8c6672aa06ba35e6602df": "7acfab7b289132ab93f407051e2d857b",
".git/objects/1a/32bc7f2022437f8ae73914fdcf3ba9ad09efd5": "a344d101639bbb261184253c17c2d03c",
".git/objects/1b/8058625adbbc61daf01229bf00a972b239a0c5": "27838390c5df1308755cd0cbdc64db96",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/af6c78e0c7f3df3e9f30a44c47f71bb5e3e3ac": "22d90861cda119f7bfc89296efa6245a",
".git/objects/22/703d9e7ab462edd5038c154ce099b3f8d7123c": "4e0989a1b326a2e3ecc191dfda94a1f7",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/23/9b8b36e6f9a7f27a01413410eddf16df4c4f22": "2c9705b15a3fac3c57d49fd5af11ed71",
".git/objects/24/62aa897898e9ae9f30427a5a94e99100331980": "ba87bc9f4f01aa9b73bf3bc7cb89b90e",
".git/objects/25/73370ec6e42e27e1abb718709e8ee7447b9e85": "59e62f9c962267374f33df614fd8703c",
".git/objects/27/02c1383782f785f40ca9c93608fa9803008081": "41fdfd6d99a94db7d894bbf728d907d9",
".git/objects/27/ae3f6644879239958d1944192c8d1c860644d9": "d14eb4d32e9037337e71f906aac07f1e",
".git/objects/28/caae3ac54cada96ab274ad3d6f0bb1f223bb84": "a05ca96df79c7777ddc4dc2a65a745fa",
".git/objects/29/41e1d7608ec3021d210fb07cd031aa974cde35": "83c342aeebd646d3a67489a0c5a91dcd",
".git/objects/29/4fdf7c4d561dd7459a2bfa01337614bc10c97d": "1977e76119175caa200717a8b15b9a52",
".git/objects/29/f87692652e0cbf6d32dead9648eeeace2536ad": "aed145c9357e3081e87ad524fd19406a",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2d/116d920580367caf6a179155f344ede856bf31": "664ce7bca47fdb5e1d15a77de593527b",
".git/objects/2f/32fc0ff19578428fdb3082be5efa77e4c303d0": "e07dc41ee9bd95da1375db7d6d01b6ec",
".git/objects/2f/b2270ec0b8eaa8851f95e9b1949f62a3587dcd": "6a5904f7345035eafe11a8493335b701",
".git/objects/31/4447e385219f26e10dc94209033e39d5b7d18d": "8494d5bd62c61fa6843e345aab2412c4",
".git/objects/32/98618aac8e27577e90817436f75ce097e33eed": "395703cafdab7074ba7d81df52c07cd0",
".git/objects/32/f6c27880c2956dadeb7051c1b188b162c62bca": "2ad204e88aaea01cddbdbbb7870e5350",
".git/objects/32/f9a50a17277be77f3c35690ddc099a47fd53ae": "f4ecb829643f06f695ded4b67d79312c",
".git/objects/37/f2943f86ecd936b7a611ab9503cbf923258a9d": "025ec6863bdae475370df558316b9553",
".git/objects/38/dd155173d8b15e5048ba08dd24dacab8d38b33": "69a76ba1670c489088c75061ca5d3592",
".git/objects/39/1129304e6e53e24cf38ac6f0186cc4d9c23fcb": "f8b29ad1fe70b7d4b8f50116f432ff2d",
".git/objects/39/f2bbf08a1e68f892f6723764a9c9b3d932c4f2": "9f110fd032a7635d7ee863c779edba55",
".git/objects/3b/5ed85631c04ca174b0cb3ea036b7389d56c401": "06b1e0f6c1a29653b616814d9303211e",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/3d/27cc7811965fe7ddf62dfefa392f52bce83a14": "d14594008ef2d0968c45ffa1f7fc26c6",
".git/objects/41/3df5d6243120c931e9df6ab0562b77287686df": "518c610efea0b0970777a997a84fc3cc",
".git/objects/43/5e13746ca390402cd898f6d621649b11c6fa88": "a2e0f3214738545c0627942cf6bcbc0e",
".git/objects/44/29bee1c3bad04888249f39d80c2e6882a3f08f": "5e66058d13afcb398a1b811c8fce3ff7",
".git/objects/45/e90c20331a84d6e8121ba684ff7a2817854643": "2da79cc42a8e4770fad9456f765d756c",
".git/objects/45/f79befe39b9c3bbf72f909e469226edcb436cd": "f10b23d676b6ee78b08f4b18d87769ad",
".git/objects/47/53236d7a306ae406e387bd614d91e8fddff8bb": "5b1f3071e3e0ddc12962f423159d031b",
".git/objects/48/501c4940abdfb0f07d6419fe1ccee09e4756ab": "0099aaf9cc51cfe7dc4777c314a04b07",
".git/objects/4a/78bae618cf347bccb5a6c0a8f91d0b63778e03": "dd15332701e2b4a533abc0e0837fb255",
".git/objects/4a/d661e1c0eb0f813d5a70d6f2accf0c2b0ec902": "b5f18e4350c43bfec8e3232a3d9f96a2",
".git/objects/4c/ebd5d167db838158beb6329469a4abebe10087": "d9084c178d8d923c5562211e237e89ef",
".git/objects/4d/93b9817907b6d85ac6386950fd63bff132c1aa": "9061dd381d3fb9a49b5ba0337251ce13",
".git/objects/4f/4f79b2a08a74f84a0c39f5b7407d6c0b7ecea1": "9cc138f70bb6d48692b2a0d3fdbbee0f",
".git/objects/4f/63432b06496929712ab20353f247be6dc7267b": "09cb6c8710d7346660c33a65b1b84207",
".git/objects/50/a319e9f3df33558c070b2987885989a062de3a": "c3a90c8c790235bbc81c4b6d4f3d7006",
".git/objects/53/362e68837dfcc36f0093123c4663b628d08711": "bd2aa53c905028d1102607c1c68877b5",
".git/objects/53/387ef5f6762ca7319e39f692e5a383ab3b74ba": "5bc95510d16262eb79183add320c8352",
".git/objects/57/1d2231a30f134f2defd62db10bf28a0fa877ea": "d6e5111b6c6f8de97d1ae37647f9867a",
".git/objects/58/7fcad83e9e11e01930f59aea21cc50cbc174a0": "fec0bc05cb14f16240b46895883c5a1b",
".git/objects/59/0dcf387cc2eded54a08ce70c18ddc3bc8690eb": "5df2b917b34872720e0b9b2314f154a8",
".git/objects/5b/fcd0ba18a3882db2a69b78a21fc8a720d9d250": "e229655d9cea6113d2ea461801290dc6",
".git/objects/5c/989c3ab756846489c0e8eea56612fcc82a4128": "254471e4185c64702f77bb6f0353445d",
".git/objects/5f/528493bd81f256601c164ac01da971daf68aa0": "94a5c93d0c20eb97b4e257f0168e43c9",
".git/objects/5f/7b81c14b3db0377483d62eb3269a777c683238": "a40280c5f2d15c3753dfc3593d45b720",
".git/objects/5f/c44415a1159cd48815bef1c334fd5196a8d40e": "8385514f584e5d1a0f2286f7551eb0ed",
".git/objects/5f/db31132a952526332c224a9296d2fd45137ce8": "7dae025337672a4ad5c3921e5a1af642",
".git/objects/61/25377d41f8cab557386875f0ce3223f73dd5db": "143a033dd08e3823d8fa115b8ceeb98b",
".git/objects/61/b5211a87d73e11444c720dcd3a784b618333e0": "f33ba8c1573b87bba0eb699c1d88b75f",
".git/objects/62/b7b1c84cfcdb31d4a396dc46d19a3cbc0ef5fe": "2c1fbe388cb45ed689e610a262dbd3df",
".git/objects/64/3dd37152faf8a5cfa506fe6cffb5d42162bae7": "65f21f0aaa36945e0d3d38f44f0a9f6c",
".git/objects/64/65bbaa39cd6ab51cef8170a5643efa7e623bb5": "c5713c93b9a5d66342711fa74e251657",
".git/objects/64/f674908719b4265a46746d4b0c21f25cd4001c": "b7e8f0f404fcdb24f3d00a427c01e03c",
".git/objects/65/fc16ca630415834d20263e9866e13880b47400": "802334c616c8fe599c7c2908952b5ebf",
".git/objects/66/496b89f8ca775cc0036af89cec4be5cf73315d": "9132c5ef2f0243a17765d69b1710dd73",
".git/objects/67/2d5978d9d780a0c74c93a6e0fbe10d217c4f3a": "2996120184c71b7f64463b979f1555c3",
".git/objects/67/96982eb9649a408efd17ae5e87f9f8f99cae17": "94f20d22443bb314222415221381141e",
".git/objects/67/c59845970d63c9c9cbaad724c14cfc0c267f96": "9e29af622bef8c352c8ec82b0abcd3bc",
".git/objects/6d/d8b1c5dc577d66e62245dbdb864fd712686657": "919164867a2f2b834ccd4950b71a821d",
".git/objects/71/64e32a54856265f5de8cd809127e9d2147e7bf": "1ac4d097cf7412611188b8e7708e2413",
".git/objects/73/46e317908106955e4e90797ca0072302ab66be": "c967037d719cdf7c43ee61439b5aaf84",
".git/objects/74/e1410f05a5e49fbdb422b40c04877ce29d03c5": "e4dd7d62a23f6e7e7329ed06cb8d569b",
".git/objects/76/475233d163d0c1560f642cbb9fd85a7d5a0281": "b1e62abf53b539d71dc99d6ff35b5af3",
".git/objects/77/3c4d4437f59194c695f4fd71df5aa560eabbb3": "342e1f99dc8321196c971052dc9c3575",
".git/objects/77/6cc8b4ac57400c95f6d60082aba29f47292fa2": "eb287347b22b657de2021be14643ead3",
".git/objects/77/f58142033f1635247370054c1f111f7c5fa9d4": "d2694f7ff919089466957a342fc49405",
".git/objects/78/853621afd548ce8d0055f01d4891a440c7dc24": "b56d1cfb47f46eda58b94fa4225d0ffb",
".git/objects/79/1c1bdaa446fb8d1fcaf1ca98a9541ebd3d2917": "a0393d9fcbfa7ddcf32c4514359a1c50",
".git/objects/79/44457a97b279e9fd2769111ff531bed2737861": "d032a0f92800bca4898450ff35bdde7f",
".git/objects/7d/38aaf4d64d12d7fcfb4f8042351cc2a2188694": "dbf7bc4979a403d52a2bfc86e11b2102",
".git/objects/7d/72f77057b8bc33d82d19a4843d2379223340d7": "5fd630dc71b78d215396681f1c275196",
".git/objects/80/7c88ad6d77e62690ce5c96557e99d2ab617da0": "a54e6bb5ae3deb9bf622ddbce3797f9e",
".git/objects/81/3e625ddf711bf3362bd60777dd92f18db0721b": "52ba66e0b539132731f3469c514ecbbd",
".git/objects/81/51beda4aa6502f3732a9d005a963fa00b75b6f": "4f194222299c43c09bf5e8c87a47237b",
".git/objects/83/16c8b945db3be58b1b5dc9297ef508ad2e7911": "12be65c2469e1585d678e9551e779df9",
".git/objects/83/296542c5bd3116e233aca2bda1da1fbcd7a82c": "96ec6eda9d660283b5fdc5d9ed9ea0d8",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/87/6b576c08cc601a558befa561f54cfb6ac32346": "20ddbabae31013c2c50698f3569d7f7b",
".git/objects/87/6fe30ba05bd80e2f16638626ea9abe627baf83": "3cf5b6086c5a5ba92c4f24a24999f2e0",
".git/objects/87/ae424461a768652083839252817754b3d1b6b1": "6d32f3c28957f1748e60af1f7f94c42d",
".git/objects/87/b733be9d16c590314d2b83a9acbe108abe94be": "707f5a76cb8b6f8e60fcdef8a787f9be",
".git/objects/87/dc0cf127615c495f51a3aa80b2197820956bbe": "c954dc3a35302fc8e1fc243fc984c840",
".git/objects/88/56867113252e7f7bb81be0a371cdff57718ba3": "4473819420c049742221d8f0ea7c6ee6",
".git/objects/89/56a56ee197b5512eecc5d824148f500e656eac": "986b9fb685603e5b8155fe1c62a69a39",
".git/objects/8b/038786edd91f5cd94b0ed3091ebbb7faeaef8d": "a6fcb50b2de29a68c2b8c70ee770dfde",
".git/objects/8b/0baa2f28dc07718d318276c42fa3b15ce73974": "da11220dabe08f260be501a4e8961b87",
".git/objects/8b/67d40eb3216ed88944e4050646eeeaf6d9debb": "a2170885d81beaa9a121e13442b6da3c",
".git/objects/8b/a89790c6929067cad8d98447b040156b059782": "4530e970891ee9df2c5f0685cd5ffeba",
".git/objects/8d/4f88983c66e734166dc5b8a5d65d45d982d39a": "e17a439deffbb9930f717a93d29dc1af",
".git/objects/8e/55a3aa06a8dd03134d139544f241dbda55261d": "e287b45b8995bf9e384cff3d5b2fa897",
".git/objects/8f/309bb6b27b18050aece7733a5bed0fc589b1f1": "c4a2782e8fc52b2c5d6ce7298c0d5ec3",
".git/objects/90/d041f475aea7d045e6eb7d29ff337485c5c129": "37c2ce2ce32c38324f64f0453180e846",
".git/objects/92/33a0d8155d8b85836a4522708ce0d2e9868b71": "402c7ceba2dafb0e0ab87af2c41923e8",
".git/objects/92/d3cc19cb6d750c1b9708159bc3df1d7cd00606": "c9d261b5dcc18c4949d1a9458b3d2f19",
".git/objects/92/d836e52638f1a9e20716f77f53288863b690b4": "02ce68dc88e280fe4a1c3723491cac4c",
".git/objects/92/e60672715a5f6998296a7dcbae3c2114ebe64b": "e08582c9a3c66cde14043d392e2704b8",
".git/objects/93/3f7c347513789ff035e26594df912af80fe4a5": "0f892d3467f0c7d0357b4059cd5998ca",
".git/objects/95/e703fb4d39eefe722672e5fe98046e32ec20ec": "591bbbf2f3959be5f702bdfa7e6ffcdf",
".git/objects/96/7ba9eca6c9b75c34ca1a3a4a93b7b2c12b6674": "9efe8ced2a218213a941d0d892073db7",
".git/objects/99/248fb019f95b49b25eb539e993f1ae9cab033f": "1157d80a8c7b225f7c66d174fe6a46be",
".git/objects/9a/7f4200fadb345baecba82a33fccd74d873d622": "26b4a8fb5379528a5cb7b0744a9f3d98",
".git/objects/9b/3f35c2ec3be206bc179415fcab5b72f0685246": "1941ac97cbbc167130d9e1e1fdbfe0a5",
".git/objects/9c/09ad7e5a1e5a4f7341251143dd96f33d9729ea": "d7f36fbf2260bbdefff5b4439459e663",
".git/objects/9d/40614026feb3a344db5e9559a5d7524773835d": "b30bb9550d09f4e41947ce97908eb905",
".git/objects/9e/9c944ecc64536b6c9d8c54ab5d2455aacca61a": "0d9ebf683a8a8ba7efa599ebf67d4e9b",
".git/objects/9f/aa44ff1aeef66d20c91647be4517273cdb49a4": "59be68d26a91c3c5d168e96f9506fb8c",
".git/objects/9f/b078d7b47ec9c16fc7d8725f9d83254f9bcd52": "be5ea594611e39718b76850c3575da82",
".git/objects/a0/b4cf9dffaa6dc0a78f1c78516b0dde0882c5ff": "398abb7def9c44a0b81d37d6024b2b10",
".git/objects/a1/0fcdb25fdb0b0dac6bd549645067322735092f": "61505e129ab657d7169fd8cd7f1cfc9b",
".git/objects/a1/a6c8e345aca76b79d2c28d20b9d434538e83bc": "095eeb07007d76c3e6ed52953a47a854",
".git/objects/a3/1d267db91957e0978df532609af5b44ab40c3b": "5e3e88a6419827785cc8846723dd2051",
".git/objects/a3/5a4bd1df7f146078bc97b5adc8332022ff535c": "e6c28e67539ae4b4c11cd526ce7e2ea8",
".git/objects/a3/81aacbd146b590c2f5b3dd50ec68138ff05c8a": "aad5293b992044f6cd3abbe4b0aa6c84",
".git/objects/a3/82af69ce90665cce6bf60455b66f8a2a4520d3": "a8c120812e895c552cbabebcc1d14af5",
".git/objects/a4/63b2d537441fcc66e77a17afcb54785a0a779d": "fd5e621d641a79b46b94b083cc10a986",
".git/objects/a5/2bca39817f03de70a5070b27e1fc34c3b2b984": "b8bc1043d113d7dcd6d8258d62dbe7eb",
".git/objects/a8/61594858c1ccba11dc4bdf63d57417e87c3699": "9392df824f725227a9ebe3b1b17cfdad",
".git/objects/a9/0162df8797d03f024d68ab4678818511b645b0": "d749ce88af1b6ec079ab257259574aec",
".git/objects/aa/1868209be6ff8509f163e7b7ab60345997010c": "73abaa2be4a2af21b6c4994bd5a89328",
".git/objects/aa/8ae8075de4b1d778605180ff15588f78b718ce": "3aac5764062e8ef7725067275b9559c2",
".git/objects/ac/a5644c0fed29e892e9550a8bc636e95400c423": "8b5efe6866dc44a8e5858d691d588606",
".git/objects/ae/2f44b1bc181d44f647da728db06c045b0360ca": "9d66f9e50fb18e3284d9e9dd434a7131",
".git/objects/b0/1a3fe355f7666fc3f565b70b005c9e9ae454d6": "c46bd5057d5b8f620aa3cf992c91a00e",
".git/objects/b0/74adbcb601e8e7d23786ab8cb02b28cb9f2cab": "413d95fa396716f213e5dbba6b79a31c",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/a7782508c5400c4fdd0346069cd36394334243": "b24d00cd62101d0465b3b31d9f515631",
".git/objects/b4/aff03c6a5190e603b41fb7ab6f0a9ad29301ad": "a58cc1a996d8ccbaa0331d198b81e85f",
".git/objects/b5/ca3aae7cc3519c87325cf84935074b5f300887": "de8c01c16a26c6fd9b05ca89029bfb48",
".git/objects/b7/61ec0c16427cda87232738da0b8bfc2565b9d3": "9bbee7a7b7a667c1e4d1b9a59918bebc",
".git/objects/b9/4bb5918232a2b420fec64054f5581f5d489123": "2952e652f86c3030fd361fcd5c451ed5",
".git/objects/ba/2c9c668c6ae308c984876ddc5472aae53a8acc": "16735cf53d50efa87ec6b1185b9ab8d2",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/f3166bd0d8a2f82ae0c80e701baec60680c65b": "8b5ca0f2edee5d3c4b31a333fda45999",
".git/objects/bc/271f82f0ad545580eb710cbd1e0eb9a337a000": "3cf59b75a94340d5f8a10bac229a0ce5",
".git/objects/be/877262dad810f7d70c1327a57c62561fe17cc9": "636528857c90b4cdee73afd6b5e60427",
".git/objects/bf/42a1a697161efb3d58d74f87fb1a999d1bce8f": "37dcf5539cafea283cc894e9c733040a",
".git/objects/c1/91d161f866526757914b47c8c89c09b9e4680c": "2467ad30ded2a50ecf68d001ce18a52d",
".git/objects/c4/c838dec9f435955edea80ea3f4f9f53b58cb96": "740b539180087c5334ed25e7e1249f8f",
".git/objects/c4/d54be64a19dd7841ca45a43e06a8c4afc40a9e": "93da9247ce2f1bb626f4765efabb6e17",
".git/objects/c5/16b68126493636b94495e6081f8ba8ce6a3901": "5815f90072e5c74807757e031bf02ad1",
".git/objects/c5/54b0a2709b7458496ae6f19eabd04b5f9033e1": "8f0ddf660ce7fdc186ec94ab53430c1b",
".git/objects/c6/3e5af4e4624a76de05ee71fb889513a5c14798": "4d04e9576e9db24579032bb88a8da0c2",
".git/objects/c6/897d6802711e55599efa0f1502418071a1ebaa": "7a7fde1bddccff2490c5aa1829091acb",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/c8/1cb04470b3cd79e4f6de995a54c72d00046d64": "f66accf1969837107331b0d40dc9d066",
".git/objects/c9/07ad06a4b8344db6b6c942e3b957d49e571498": "abddc7fc246e91d15d4e57d606248a84",
".git/objects/ca/2b0bb6fc7ac77519ec2401c5b120ff00e9bae8": "bfd45110ecd183918e81d5d66236eae8",
".git/objects/cc/747e610c5934c12670983020990c70abaf381a": "9d9eb6ed0a8b608c3d290004d08df0b4",
".git/objects/cc/dd6667731855245cd93c5b5239fceffcd6d7c3": "1e9670f3d76fb527e89a516faa9d8951",
".git/objects/cc/ff9c3c925f4f83c16c3fde285aa2031d3493aa": "8066e6e84c9c255efb5e4d0737d2221a",
".git/objects/ce/ce0fce8e45013f57541e203e198c0cd6f7f92c": "597265ccae1f83a134975cb00ffddef0",
".git/objects/cf/121a2d4cd869591d70ccf636771b890830137e": "91ca487eaa872b490a21854b2c2d9e56",
".git/objects/cf/aaaec42a0e5de7880de291eb438c1e90306023": "4c50f6a1e1734a8392d03704e5e9ca16",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/e9b36207c969d715e8c1cca51f9e4576499bad": "7ec99e95f86fadbff1f6c7949670d2e5",
".git/objects/d6/c9d513ea21b9550198bdf41930aaa1609a0aea": "f3a76c53bbce83d8138c206eaa0593fa",
".git/objects/d8/1efa5987f5da93987c7b40e7df383c9b53e0a0": "aaf59144c38740d1fc5f79de47e5e3a0",
".git/objects/d8/802de652a0ef87f86d5cc0cf1e14db65d2a619": "42d3ee445ba36dc54f0c4e6bdfab0314",
".git/objects/d9/b1c61d5cff6d7cb00f27f21b962ed0cd2517a2": "658fa8a14b739fcc7733dae25e938efd",
".git/objects/da/6cd3bbdf7f4038c25aef4f6f9a6c1daafb8b17": "230e5cc463f9cf49984b9956d32c9291",
".git/objects/db/c74bf4a191cd9bb979bc7fe2a590c06c82a905": "dedaa09b0c104b101032ab646ba81577",
".git/objects/dc/0ac6d095bce079592b58e8c119f8a646aab1c4": "8cb6ffc9a30bd65b54e5cd271d7f962f",
".git/objects/dc/c93f29c419f100e2d580216a31a9f9f2a1323e": "aa8b9360cfb42a13da5cff2ba89009ba",
".git/objects/dd/900f06b150b2bef305414447fb44f272b08623": "b760f4188755948f9f475f73ce12a7e8",
".git/objects/df/d967cecc5956bd275d8c24d6e129ca7a15ada2": "78181a8b67d1ced99060f2b77718b91c",
".git/objects/e0/47234433a512261dd664da579fac91347d14a2": "681c474bcff896c6a45bfa962083da48",
".git/objects/e1/18b628bf75f99fcf6d29beec0bd39b4273d350": "4dc560bfa0d5fc57ae5c691ba574f4b6",
".git/objects/e3/c484f0f801039ed9d7ed5f46abfd0f59a6707b": "488f5a2b9f53f0f1f6d8227fc0d8a507",
".git/objects/e5/d2f04fa9f34074671419c7a9030f02468e0ccb": "8edfc7b919ecea13f3fed5e6d8d2c6e9",
".git/objects/e6/4db796d1fc0d6f05566dc394fc8640804fcf06": "003240fda8f64736521fc3bb086528b9",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e6/e5765fcd7fc55b617532bf350776d5addd5069": "773a5c3787a9c6c43a36c438a99b14ab",
".git/objects/e6/ef01a83d1846304dcbbc8224b512b806ba0ace": "7b504cfedc4fdc201f563fb397dc76b7",
".git/objects/e8/7d31a6114048203f997ba36c5fd14dcaa70b30": "40b9f3bcc89b79727da136c5b69ed866",
".git/objects/e9/e6a1ef7861f28bc7d29d25d969ccbda0023f91": "59cd786f3a90ec5fdaadcf08cf944364",
".git/objects/ea/3cf39f216be835ebfe77222dc69a4a73dee944": "aa1dcede4f2e9b273493e085ffeb0081",
".git/objects/ea/68a670987ea3284223f5568ddcf0b2c1e99069": "58d97fa48f942b18e99dad07ef00e7cc",
".git/objects/ea/c3436a8d26bb542fea27c1d7bd6fe8a8082da1": "20c2915622077416f9a5c28a7742491e",
".git/objects/ec/201d379f7c6ee12a58311ac89f2f1b4595830e": "c85d64d93c2133b1b8ddcb36207273a4",
".git/objects/ec/a028e10e415b643ca35739a085712a1ca950ec": "5f2c6992a77bfab0418d7445c9f5fc4c",
".git/objects/ec/e455b2395c08e40c8eaca1c12c6b84a5fac548": "8252f0ca23cc9af9f9dcf3855054e683",
".git/objects/ec/fe0a097311fab96a326ac353a0cdeb138fd204": "ed0eeaa51e6abe7f4ca6623dec797f8d",
".git/objects/ed/988947228abdcd19bc939f03c32286dff16514": "690ad1e69d45f6b41841995192215b54",
".git/objects/ed/bf1c327ec56924af011e2f6210b38de2cd8513": "a8fc3aac1ab83a379ad821baac6c8ceb",
".git/objects/ee/4a3b6238f955c1cb984d9a5555cf17a97db2a7": "c8e1f6c9097a63d575e123ca761920e9",
".git/objects/ee/e5f9959dbcf127bb06c3ae3b184afbc2e1ff84": "7cf63a8531377de46f0948fe4c709c18",
".git/objects/ef/1f6e1064bbcd0129579862eb24e4f71fd221b6": "ebf4eea9ab37f7b7ac7f4e839157dd2c",
".git/objects/f0/46db3bc758d71d476be77c865b8f6c1ab99aee": "682fab135b6b4a400bccc634d25065ff",
".git/objects/f0/553f7ff9116e2056ca42ce330421f1069cbf66": "4834cdde0537d30158483d7d8bda969c",
".git/objects/f1/817b6047d47f7fe7a1a931ea726dacca1ac49f": "a82dd9b48ea924130330124433427ef0",
".git/objects/f1/dcdb3d6e6704be0786e3524fc33e3be948a254": "5f4f42dd298a0e20689a81bdea08cf70",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/3fb4b3fabb6fb944743cd39b07b2fd4dacd4a5": "7f911c99d1ec8257c6aaa2f89312e39e",
".git/objects/f5/6b87386ef4303e941dde32b9003e3b93e58101": "f6e8d4e4b13b04d7938644fd0d94207c",
".git/objects/f6/5f2b5ba47aaf97d459344e8c926d4a2fefa52a": "a275f9ecbde73a75329b36df86e19fc2",
".git/objects/f7/5c2dea14fd5b21b867124b82d5eb743c20b8f9": "837b2ab005a3363c15d6687105f3a1d4",
".git/objects/fa/6a31d51609fdcd3566d28a3380390d3361e0b2": "3b91be9ae6003fe594a1114439571ddb",
".git/refs/heads/master": "5e8f2c5dc23ede77a85b3ce3f3b503bf",
"assets/AssetManifest.bin": "d2b100d52c8cf09106701f5c18a669bc",
"assets/AssetManifest.bin.json": "2e6ed19abef25a140c16a8dae65a6e50",
"assets/AssetManifest.json": "aefa61b7287cfe6d7813cd3f1a71debe",
"assets/assets/fonts/Roboto-Bold.ttf": "2e9b3d16308e1642bf8549d58c60f5c9",
"assets/assets/fonts/Roboto-Regular.ttf": "327362a7c8d487ad3f7970cc8e2aba8d",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/images/k1.png": "a82ec3b624de940f94ba1c922f6f6138",
"assets/images/logo.jpg": "02c0f1fff490c811de6866ecaf233ec5",
"assets/images/logo.png": "4ae957e21f137374e7e9cc2040edb192",
"assets/images/logo2.png": "35efa445228a9862228bfe841f84fdb8",
"assets/images/logo_lang.png": "51f69fa7a216db7ea11d18246fb88245",
"assets/images/logo_oak.png": "92eb9010486d855735cb54945bd7de1f",
"assets/images/logo_sw.jpg": "efeb66ef736f2151ba55a194b5921094",
"assets/images/logo_weiss.png": "8111c4d641cbf969a6e6a3b84f7657a4",
"assets/images/map.png": "4f5e30c0124767b1e956af461571c223",
"assets/images/map2.png": "af775792a6820bacda30da8f4f11f052",
"assets/NOTICES": "f8de1577794197185733eb827540c5e4",
"assets/packages/another_brother/custom_paper/CustomRJ2050Paper/RJ2050-RD50mm.bin": "aafde73355953963f9b4feb7fd218308",
"assets/packages/another_brother/custom_paper/CustomRJ2050Paper/RJ2050-RD58mm.bin": "f1c1280ccee9da2deeae6d7802a0f848",
"assets/packages/another_brother/custom_paper/CustomRJ2150Paper/RJ2150-2x4inch.bin": "9efb2576005afd188bf87718d102739f",
"assets/packages/another_brother/custom_paper/CustomRJ2150Paper/RJ2150-RD1.9x3.3inch.bin": "289f7152e72d7d5920e17d5978e2bdef",
"assets/packages/another_brother/custom_paper/CustomRJ2150Paper/RJ2150-RD50mm.bin": "79ac837bf5d54f8e706fb19eb9aa4432",
"assets/packages/another_brother/custom_paper/CustomRJ2150Paper/RJ2150-RD50x85mm.bin": "289f7152e72d7d5920e17d5978e2bdef",
"assets/packages/another_brother/custom_paper/CustomRJ2150Paper/RJ2150-RD58mm.bin": "63a5b93aa743f1e8433606a7eae1cb55",
"assets/packages/another_brother/custom_paper/CustomRJ2150Paper/RJ2150_20ix10i.bin": "43a55d86ea6696c5f33bf9dfb40a56d1",
"assets/packages/another_brother/custom_paper/CustomRJ2150Paper/RJ2150_21ix15i.bin": "f32c69aac87ce5cc6b5b5a35fd6573bc",
"assets/packages/another_brother/custom_paper/CustomRJ3050AiPaper/RJ-3050Ai_RD2.2Continuous.bin": "f3ce937b4b5be118fa66b063dd626125",
"assets/packages/another_brother/custom_paper/CustomRJ3050AiPaper/RJ-3050Ai_RD50mmContinuous.bin": "0847e0f4b4eddc2cd6b6b2a7aa21707e",
"assets/packages/another_brother/custom_paper/CustomRJ3050AiPaper/RJ-3050Ai_RD58mmContinuous.bin": "f3ce937b4b5be118fa66b063dd626125",
"assets/packages/another_brother/custom_paper/CustomRJ3050AiPaper/RJ-3050Ai_RD80mmContinuous.bin": "a2f4097852edeb8bdd0014334bba7e9a",
"assets/packages/another_brother/custom_paper/CustomRJ3050AiPaper/RJ3050Ai-RD76mm.bin": "df1207154e48d3402e9ff458114a9597",
"assets/packages/another_brother/custom_paper/CustomRJ3050Paper/RJ3050-RD1.90inch.bin": "e562e73c3cbe181da5a1eff33f40c27b",
"assets/packages/another_brother/custom_paper/CustomRJ3050Paper/RJ3050-RD2.00inch.bin": "a9233e46978a5300f0b39a6343d4657a",
"assets/packages/another_brother/custom_paper/CustomRJ3050Paper/RJ3050-RD3.00inch.bin": "f435affc5d6914220d55652ab99e84af",
"assets/packages/another_brother/custom_paper/CustomRJ3050Paper/RJ3050-RD3.15inch.bin": "9197fc3ab339b87e7dca701ad35f9241",
"assets/packages/another_brother/custom_paper/CustomRJ3150AiPaper/RJ-3150Ai_RD2.2Continuous.bin": "092edaf9a81dfae2fd3efbfb2c0f0302",
"assets/packages/another_brother/custom_paper/CustomRJ3150AiPaper/RJ-3150Ai_RD50mmContinuous.bin": "b6b7b1e622f639c3326defd29d8d76be",
"assets/packages/another_brother/custom_paper/CustomRJ3150AiPaper/RJ-3150Ai_RD58mmContinuous.bin": "092edaf9a81dfae2fd3efbfb2c0f0302",
"assets/packages/another_brother/custom_paper/CustomRJ3150AiPaper/RJ-3150Ai_RD80mmContinuous.bin": "ba2661594c188cc94200e12d660d3a0e",
"assets/packages/another_brother/custom_paper/CustomRJ3150AiPaper/RJ3150Ai-RD76mm.bin": "ac041455cb1aa09c5d9cf62fce92ed31",
"assets/packages/another_brother/custom_paper/CustomRJ3150AiPaper/RJ3150Ai-RD76mm44mm.bin": "e1e92db8412f5678f76a2fd6fd7e4950",
"assets/packages/another_brother/custom_paper/CustomRJ3150Paper/RJ3150-RD1.0x1.0%255B1%255D.bin": "66c1937f3e7d5e55b707c3e2e7318ab1",
"assets/packages/another_brother/custom_paper/CustomRJ3150Paper/RJ3150-RD1.9inch.bin": "f83eb1e80729dc3e25c2590894f46d90",
"assets/packages/another_brother/custom_paper/CustomRJ3150Paper/RJ3150-RD1.9x3.3.bin": "5840304e7d02c6dd899564b26f08b5cd",
"assets/packages/another_brother/custom_paper/CustomRJ3150Paper/RJ3150-RD2.0inch.bin": "c374bb9c78d67cf300a302e9819ff68d",
"assets/packages/another_brother/custom_paper/CustomRJ3150Paper/RJ3150-RD2.0x1.0%255B1%255D.bin": "5eb2643fe2381017a54ea8053a1458cd",
"assets/packages/another_brother/custom_paper/CustomRJ3150Paper/RJ3150-RD2.3x3.6.bin": "3a5b5b6532b8e91cc22315b11aed9078",
"assets/packages/another_brother/custom_paper/CustomRJ3150Paper/RJ3150-RD3.0inch.bin": "d2a83155a0928c3349c0c2199bb885ed",
"assets/packages/another_brother/custom_paper/CustomRJ3150Paper/RJ3150-RD3.0x1.0%255B1%255D.bin": "81926c0973f9987821d0036c5ba7e49f",
"assets/packages/another_brother/custom_paper/CustomRJ3150Paper/RJ3150-RD3.0x1.75.bin": "eead2fce759f7432ca3911557d954975",
"assets/packages/another_brother/custom_paper/CustomRJ3150Paper/RJ3150-RD3.15inch.bin": "8672efeaa03972dc5e05970870bc31de",
"assets/packages/another_brother/custom_paper/CustomRJ3150Paper/RJ3150-RD50_85mm.bin": "5840304e7d02c6dd899564b26f08b5cd",
"assets/packages/another_brother/custom_paper/CustomRJ3150Paper/RJ3150-RD60_92mm.bin": "7ce136d98c0335ab3a484032432516c4",
"assets/packages/another_brother/custom_paper/CustomRJ3150Paper/RJ3150-RD76_44mm.bin": "eead2fce759f7432ca3911557d954975",
"assets/packages/another_brother/custom_paper/CustomRJ3230BPaper/RJ-3230B-RD76mm.bin": "a48a8dd5da528a16b8bbaede220b3820",
"assets/packages/another_brother/custom_paper/CustomRJ3230BPaper/RJ-3230b-RD76_44mm.bin": "8e50950e5b0534157697446e1ab74b87",
"assets/packages/another_brother/custom_paper/CustomRJ3250WBPaper/RJ-3250WB-RD76mm.bin": "62ca33709f88c127a006e071a81062d5",
"assets/packages/another_brother/custom_paper/CustomRJ3250WBPaper/RJ3250WB-RD76_44mm.bin": "f797d53014c2b1eefd602010b63b914d",
"assets/packages/another_brother/custom_paper/CustomRJ4030AiPaper/RJ-4030Ai-RD2inch.bin": "0e59c36db8f7324ae927526b03adcee9",
"assets/packages/another_brother/custom_paper/CustomRJ4030AiPaper/RJ-4030Ai-RD3inch.bin": "a7e0eaa4f511a839d3af898bf4ae6c10",
"assets/packages/another_brother/custom_paper/CustomRJ4030AiPaper/RJ-4030Ai-RD4inch.bin": "37be38c17d4575b9621a06d4c270c9e2",
"assets/packages/another_brother/custom_paper/CustomRJ4030AiPaper/RJ-4030Ai-RD4x1.bin": "9ea07b4858b45a3ffcb152dfed0b630b",
"assets/packages/another_brother/custom_paper/CustomRJ4030AiPaper/RJ-4030Ai-RD4x2.bin": "d853c2f26a4c2a2cb53ec6cdb9deaa0d",
"assets/packages/another_brother/custom_paper/CustomRJ4030AiPaper/RJ-4030Ai-RD4x3.bin": "292cfa393c32d61b3ad8793bfb95db5e",
"assets/packages/another_brother/custom_paper/CustomRJ4030AiPaper/RJ-4030Ai-RD4x4.bin": "2e7b45428cd8523231f323d54583e675",
"assets/packages/another_brother/custom_paper/CustomRJ4030AiPaper/RJ-4030Ai-RD4x6.bin": "0016aa7930ebaefc3ee710ed868d12d4",
"assets/packages/another_brother/custom_paper/CustomRJ4030AiPaper/RJ4030Ai-RD80_115mm.bin": "bc39df95871339775b424a0358edb042",
"assets/packages/another_brother/custom_paper/CustomRJ4030Paper/RJ-4030-RD102mmX152mm.bin": "3eb406c1b91714c0d6ca3701123ae5bf",
"assets/packages/another_brother/custom_paper/CustomRJ4030Paper/RJ-4030-RD4inch.bin": "77530d765c8d179ff3d5e0a6b614610a",
"assets/packages/another_brother/custom_paper/CustomRJ4030Paper/RJ-4030-RD4x1.bin": "17d78556acb25f2fe38a1fd8490829f8",
"assets/packages/another_brother/custom_paper/CustomRJ4030Paper/RJ-4030-RD4x2.bin": "5b6455f6ea612dd98b50466efd0fd2a7",
"assets/packages/another_brother/custom_paper/CustomRJ4030Paper/RJ-4030-RD4x3.bin": "a5fb55baa546887c34363789fa330252",
"assets/packages/another_brother/custom_paper/CustomRJ4030Paper/RJ-4030-RD4x4.bin": "69de505c654561fe16b61c5f8e936f84",
"assets/packages/another_brother/custom_paper/CustomRJ4040Paper/RJ4040-RD115_80mm.bin": "4f096e568a09abe000da7e3b98ad7c17",
"assets/packages/another_brother/custom_paper/CustomRJ4040Paper/RJ4040-RD3inch.bin": "4cdb1024e0cc9fbe753a19e466bbc1e1",
"assets/packages/another_brother/custom_paper/CustomRJ4040Paper/RJ4040-RD4inch.bin": "fd1becf122ce6daa36d9b2d9b0d30beb",
"assets/packages/another_brother/custom_paper/CustomRJ4040Paper/RJ4040-RD4x1.bin": "153ed99457426656a4af1ffeeaa73d1a",
"assets/packages/another_brother/custom_paper/CustomRJ4040Paper/RJ4040-RD4x2.bin": "4b1a37e7ff8d2c2bae6287b794c8a7dc",
"assets/packages/another_brother/custom_paper/CustomRJ4040Paper/RJ4040-RD4x3.bin": "e4129fe95ef2a50db9ed2c679daf0295",
"assets/packages/another_brother/custom_paper/CustomRJ4040Paper/RJ4040-RD4x4.bin": "def3978fb0a1651e33faf4bad772bbe4",
"assets/packages/another_brother/custom_paper/CustomRJ4040Paper/RJ4040-RD4x6.bin": "0f8f0858a85b97113add5b554f4955ed",
"assets/packages/another_brother/custom_paper/CustomRJ4040Paper/RJ4040-RD50_85mm.bin": "eaea54136c0e4d29d7067bc17dc33066",
"assets/packages/another_brother/custom_paper/CustomRJ4040Paper/RJ4040-RD58mm.bin": "1acbaedabaeacc047d02886bcc3ae840",
"assets/packages/another_brother/custom_paper/CustomRJ4040Paper/RJ4040-RD60_92mm.bin": "f0e0fe46438c0ac94336ad19efe9d0f8",
"assets/packages/another_brother/custom_paper/CustomRJ4040Paper/RJ4040-RD80_115mm.bin": "dcedbc3110e3f31131a2351e03a1a3d3",
"assets/packages/another_brother/custom_paper/CustomRJ4230Paper/RJ4230B-RD1.9x3.3.bin": "977fe3da4079f645a7dd675fe58ef958",
"assets/packages/another_brother/custom_paper/CustomRJ4230Paper/RJ4230B-RD2.2inch.bin": "1cd253fcc5bbb6578dc9828dbf079563",
"assets/packages/another_brother/custom_paper/CustomRJ4230Paper/RJ4230B-RD2.3x3.6.bin": "e767d95ce571d8f3fd99f5590c4ff6d9",
"assets/packages/another_brother/custom_paper/CustomRJ4230Paper/RJ4230B-RD3.1x4.5.bin": "6a4b9ec2f7e827ef4890184196a0403e",
"assets/packages/another_brother/custom_paper/CustomRJ4230Paper/RJ4230B-RD4inch.bin": "82da4aaebfe78d891ffc28139fc83f42",
"assets/packages/another_brother/custom_paper/CustomRJ4230Paper/RJ4230B-RD4x1.bin": "7e7be31bfaaa65f3e5f981985cdf204d",
"assets/packages/another_brother/custom_paper/CustomRJ4230Paper/RJ4230B-RD4x2.bin": "1d7ddbc96a2c10ca14d0ebfec0b59d58",
"assets/packages/another_brother/custom_paper/CustomRJ4230Paper/RJ4230B-RD4x3.bin": "1c796b6b96c8e008fbdd51f82f8551f9",
"assets/packages/another_brother/custom_paper/CustomRJ4230Paper/RJ4230B-RD4x4.bin": "9151e749d7a63ea7f83aab2ca5ef084f",
"assets/packages/another_brother/custom_paper/CustomRJ4230Paper/RJ4230B-RD4x6.bin": "c5b3da00af51f2c7cd01c4bcbd60883e",
"assets/packages/another_brother/custom_paper/CustomRJ4230Paper/RJ4230B-RD80mm.bin": "45ed9a987fc6d8e051199edfea55b941",
"assets/packages/another_brother/custom_paper/CustomRJ4250Paper/RJ4250WB-RD1.9x3.3.bin": "2c7f6769f73ed1b00c113b0bfebb4507",
"assets/packages/another_brother/custom_paper/CustomRJ4250Paper/RJ4250WB-RD2.2inch.bin": "a945e75023c038e766fb82df5ad6f8d9",
"assets/packages/another_brother/custom_paper/CustomRJ4250Paper/RJ4250WB-RD2.3x3.6.bin": "46411bf6011597436fee2ddd953aff26",
"assets/packages/another_brother/custom_paper/CustomRJ4250Paper/RJ4250WB-RD3.1x4.5.bin": "7a190ce756f36535ce5a3c56a5c9f326",
"assets/packages/another_brother/custom_paper/CustomRJ4250Paper/RJ4250WB-RD4inch.bin": "afe8eac4ac0bbbc35db3f01f14a52c53",
"assets/packages/another_brother/custom_paper/CustomRJ4250Paper/RJ4250WB-RD4x1.bin": "8b5869796aa1bf62d351784b8fe49c6a",
"assets/packages/another_brother/custom_paper/CustomRJ4250Paper/RJ4250WB-RD4x2.bin": "cc8287e3a2c443445da1e563f1cc4470",
"assets/packages/another_brother/custom_paper/CustomRJ4250Paper/RJ4250WB-RD4x3.bin": "644b4e72da1056bca02310f7bdfb3124",
"assets/packages/another_brother/custom_paper/CustomRJ4250Paper/RJ4250WB-RD4x4.bin": "3e6142f9d40dee375118e1f6cfd9a58b",
"assets/packages/another_brother/custom_paper/CustomRJ4250Paper/RJ4250WB-RD4x6.bin": "8f9b3a4615a7563fbb325d5cba45b7f0",
"assets/packages/another_brother/custom_paper/CustomRJ4250Paper/RJ4250WB-RD50_85mm.bin": "2c7f6769f73ed1b00c113b0bfebb4507",
"assets/packages/another_brother/custom_paper/CustomRJ4250Paper/RJ4250WB-RD60_92mm.bin": "46411bf6011597436fee2ddd953aff26",
"assets/packages/another_brother/custom_paper/CustomRJ4250Paper/RJ4250WB-RD80mm.bin": "9ecd82cb8f4bfab665eb009ae484e4e3",
"assets/packages/another_brother/custom_paper/CustomRJ4250Paper/RJ4250WB-RD80_115mm.bin": "7a190ce756f36535ce5a3c56a5c9f326",
"assets/packages/another_brother/custom_paper/CustomTD2120NPaper/TD2120N-RD1.1x1.1.bin": "b20fe4435f8bbc6524cc9b4c16e5fa5d",
"assets/packages/another_brother/custom_paper/CustomTD2120NPaper/TD2120N-RD1.5x1.5.bin": "c80db4a418b6436715b61b6329af33d3",
"assets/packages/another_brother/custom_paper/CustomTD2120NPaper/TD2120N-RD1.5x1.9.bin": "dba2120e4769d42df3be10fb07cea1ca",
"assets/packages/another_brother/custom_paper/CustomTD2120NPaper/TD2120N-RD1.5x2.3.bin": "7cb95f0c771f24f111534fa58802991b",
"assets/packages/another_brother/custom_paper/CustomTD2120NPaper/TD2120N-RD1.9x1.1.bin": "d53794d5115750c58823736d6f13f2a8",
"assets/packages/another_brother/custom_paper/CustomTD2120NPaper/TD2120N-RD2.0x1.0.bin": "c17463ba6544165f868ac719c57644ae",
"assets/packages/another_brother/custom_paper/CustomTD2120NPaper/TD2120N-RD2.25inch.bin": "27dda0b2c46d0880f1d19a9f26157643",
"assets/packages/another_brother/custom_paper/CustomTD2120NPaper/TD2120N-RD2.28inch.bin": "f0971aafcfdcc04ac11557574fe86360",
"assets/packages/another_brother/custom_paper/CustomTD2120NPaper/TD2120N-RD2.3x2.3.bin": "36a0b07158599dc0f196541b7dd279ff",
"assets/packages/another_brother/custom_paper/CustomTD2120NPaper/TD2120N-RD40_50mm.bin": "f8ce5cff87efc48c0d55b99372e1f233",
"assets/packages/another_brother/custom_paper/CustomTD2120NPaper/TD2120N-RD40_60mm.bin": "5e7f43adf8d130628d2bec9d1d48b8e6",
"assets/packages/another_brother/custom_paper/CustomTD2120NPaper/TD2120N-RD50_30mm.bin": "3eced7b79a21f254e9381e60fa953e6f",
"assets/packages/another_brother/custom_paper/CustomTD2120NPaper/TD2120N-RD51_26mm.bin": "2e8f50a4bd7f4727c6abeb6e5db77e0b",
"assets/packages/another_brother/custom_paper/CustomTD2125NPaper/TD2125N-40mm40mm.bin": "5a1b80761f5a11bf01c44d024a0a3d54",
"assets/packages/another_brother/custom_paper/CustomTD2125NPaper/TD2125N-51x26mm.bin": "92dadebd3bf60cf94b67299de7f6a45a",
"assets/packages/another_brother/custom_paper/CustomTD2125NPaper/TD2125N-57mm.bin": "40290a828c7ae7c8bcf9c4f290291b2b",
"assets/packages/another_brother/custom_paper/CustomTD2125NPaper/TD2125NWB-51x26mm.bin": "97216cdc079011be108980b91fa7f94b",
"assets/packages/another_brother/custom_paper/CustomTD2125NWBPaper/TD2125NWB-40mm40mm.bin": "147337a523b27852755d96329c56ee42",
"assets/packages/another_brother/custom_paper/CustomTD2125NWBPaper/TD2125NWB-51x26mm.bin": "4a630dba0f137c6c6543bc188931fad1",
"assets/packages/another_brother/custom_paper/CustomTD2125NWBPaper/TD2125NWB-57mm.bin": "158bedb0bcbfc25a6293ad4d0e837e91",
"assets/packages/another_brother/custom_paper/CustomTD2125NWBPaper/TD2125NWB-57x32mm.bin": "3f3125f4a0fe375874ff3b9375dd47fd",
"assets/packages/another_brother/custom_paper/CustomTD2125NWBPaper/TD2125NWB-57x51mm.bin": "3536b622d564070d486f645b88e2fd54",
"assets/packages/another_brother/custom_paper/CustomTD2125NWBPaper/TD2125NWB-57x76mm.bin": "01958e02dcad6a18df1541edba8029d9",
"assets/packages/another_brother/custom_paper/CustomTD2130NPaper/TD2130N-RD1.1x1.1.bin": "427f39065cf1924973319ed9c57ceb48",
"assets/packages/another_brother/custom_paper/CustomTD2130NPaper/TD2130N-RD1.5x1.5.bin": "90dc9185eaa10357dfbe1b2990ab5bfb",
"assets/packages/another_brother/custom_paper/CustomTD2130NPaper/TD2130N-RD1.5x1.9.bin": "f314866a3587c7d9280356ec53d863a1",
"assets/packages/another_brother/custom_paper/CustomTD2130NPaper/TD2130N-RD1.5x2.3.bin": "fcc8d9fd2989e99fbcfd68c8f6a3e4bd",
"assets/packages/another_brother/custom_paper/CustomTD2130NPaper/TD2130N-RD1.9x1.1.bin": "99d2ec8ea8b25865abd3dc5ece58995c",
"assets/packages/another_brother/custom_paper/CustomTD2130NPaper/TD2130N-RD2.0x1.0.bin": "1eb59d2d7e1c24e3eadc85be2d28e9df",
"assets/packages/another_brother/custom_paper/CustomTD2130NPaper/TD2130N-RD2.25inch.bin": "7bcd9baa2ab6c9ec0bb9741912cee971",
"assets/packages/another_brother/custom_paper/CustomTD2130NPaper/TD2130N-RD2.28inch.bin": "6b0b7c2baef1ed15c7b966eb07850d60",
"assets/packages/another_brother/custom_paper/CustomTD2130NPaper/TD2130N-RD2.3x2.3.bin": "fbfab345bb40b9cb3c36ecf8b69e74a6",
"assets/packages/another_brother/custom_paper/CustomTD2130NPaper/TD2130N-RD40_50mm.bin": "f314866a3587c7d9280356ec53d863a1",
"assets/packages/another_brother/custom_paper/CustomTD2130NPaper/TD2130N-RD40_60mm.bin": "fcc8d9fd2989e99fbcfd68c8f6a3e4bd",
"assets/packages/another_brother/custom_paper/CustomTD2130NPaper/TD2130N-RD50_30mm.bin": "99d2ec8ea8b25865abd3dc5ece58995c",
"assets/packages/another_brother/custom_paper/CustomTD2130NPaper/TD2130N-RD51_26mm.bin": "1eb59d2d7e1c24e3eadc85be2d28e9df",
"assets/packages/another_brother/custom_paper/CustomTD2135NWBPaper/TD2135NWB-RD40x40mm.bin": "9c17df472d7d578c9b8494032da9cb09",
"assets/packages/another_brother/custom_paper/CustomTD2135NWBPaper/TD2135NWB-RD57mm.bin": "03d0f2f5c0252e21335f5aafd64c419d",
"assets/packages/another_brother/custom_paper/CustomTD4550Paper/TD4550DNWB-RD2.2inch.bin": "e556f0391cb6ea03cf7f50cf96300ed7",
"assets/packages/another_brother/custom_paper/CustomTD4550Paper/TD4550DNWB-RD2.9inch.bin": "c8fdf31bbeaa49cae458242d9ea982e7",
"assets/packages/another_brother/custom_paper/CustomTD4550Paper/TD4550DNWB-RD2x1.bin": "13fed79f8fbfdf23d326d4b9e7e58528",
"assets/packages/another_brother/custom_paper/CustomTD4550Paper/TD4550DNWB-RD3.5inch.bin": "5318fc578af9e3602bde98e0505e2335",
"assets/packages/another_brother/custom_paper/CustomTD4550Paper/TD4550DNWB-RD3x1.bin": "1682a1eb07f896c68f6e62f9c67beb3d",
"assets/packages/another_brother/custom_paper/CustomTD4550Paper/TD4550DNWB-RD4inch.bin": "d82496897948da68cf7aa05b95cecb7c",
"assets/packages/another_brother/custom_paper/CustomTD4550Paper/TD4550DNWB-RD4x1.bin": "77781ee9acfca93a842f6e33805f5e54",
"assets/packages/another_brother/custom_paper/CustomTD4550Paper/TD4550DNWB-RD4x2.bin": "62a4db09f8b46f8d381a9c929ed8aa44",
"assets/packages/another_brother/custom_paper/CustomTD4550Paper/TD4550DNWB-RD4x3.bin": "e98e306756cd25a16d2232c2cecbd5bb",
"assets/packages/another_brother/custom_paper/CustomTD4550Paper/TD4550DNWB-RD4x4.bin": "734df9c5593bacec46b24e56b70ee015",
"assets/packages/another_brother/custom_paper/CustomTD4550Paper/TD4550DNWB-RD4x6.bin": "039a22cc8848472d4776b6adb8b6864c",
"assets/packages/another_brother/custom_paper/CustomTD4550Paper/TD4550DNWB-RD51_26mm.bin": "13fed79f8fbfdf23d326d4b9e7e58528",
"assets/packages/another_brother/custom_paper/CustomTD4550Paper/TD4550DNWB-RD76mm.bin": "c8fdf31bbeaa49cae458242d9ea982e7",
"assets/packages/another_brother/custom_paper/CustomTD4550Paper/TD4550DNWB-RD76_26mm.bin": "1682a1eb07f896c68f6e62f9c67beb3d",
"assets/packages/another_brother/custom_paper/CustomTD4550Paper/TD4550DNWB-RD90mm.bin": "5318fc578af9e3602bde98e0505e2335",
"assets/packages/another_brother/custom_paper/test.bin": "d41d8cd98f00b204e9800998ecf8427e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/packages/simple_barcode_scanner/assets/barcode.html": "7a1c45aca573208e15c71b378fdbe027",
"assets/packages/simple_barcode_scanner/assets/html5-qrcode.min.js": "d88d3200cb547c9e86ee972975561dcd",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "32cc31c7f950543ad75e035fcaeb2892",
"canvaskit/canvaskit.js.symbols": "bb7854ddbcaa2e58e5bdef66b58d4b47",
"canvaskit/canvaskit.wasm": "6134e7617dab3bf54500b0a2d94fe17a",
"canvaskit/chromium/canvaskit.js": "6a5bd08897043608cb8858ce71bcdd8a",
"canvaskit/chromium/canvaskit.js.symbols": "f23279209989f44e047062055effde63",
"canvaskit/chromium/canvaskit.wasm": "ad6f889daae572b3fd08afc483572ecd",
"canvaskit/skwasm.js": "e95d3c5713624a52bf0509ccb24a6124",
"canvaskit/skwasm.js.symbols": "dc16cade950cfed532b8c29e0044fe42",
"canvaskit/skwasm.wasm": "aff2178f40209a9841d8d1b47a6e6ec7",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"CNAME": "308b750bdcc8f808e9b7ab1de5476f7f",
"favicon.png": "6f16c7cc1f27ae30ae39f8819bd14ddc",
"flutter.js": "5de281a37b2308e43846d3a0b545c921",
"flutter_bootstrap.js": "522b2893348c14c553c61589a2dfe33f",
"icons/Icon-192.png": "d8174527dfd5fa82f152a5813e3e8a84",
"icons/Icon-512.png": "27dd35d6adb0ecc714ed5e17d6f00100",
"icons/Icon-maskable-192.png": "d8174527dfd5fa82f152a5813e3e8a84",
"icons/Icon-maskable-512.png": "27dd35d6adb0ecc714ed5e17d6f00100",
"index.html": "98af3f8bd3017829e32d82bb1b0cb492",
"/": "98af3f8bd3017829e32d82bb1b0cb492",
"main.dart.js": "c41b75bba64582fefa1203e9ebc70200",
"manifest.json": "eda0df646a1a90a393c17e46f467e800",
"version.json": "b0ded9a14412477de8a4464d94064ae7"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
