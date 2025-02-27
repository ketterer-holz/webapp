'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"apple-touch-icon.png": "475027bde1038f82f4b98dbafc510952",
"assets/AssetManifest.bin": "6eb7776c4d32450d75acdefa0c456dcc",
"assets/AssetManifest.bin.json": "ef80eb1221d4b0d1392585f884c8ceac",
"assets/AssetManifest.json": "b7755224b1ce9bf9a382c6325848c4f1",
"assets/assets/fonts/Roboto-Bold.ttf": "2e9b3d16308e1642bf8549d58c60f5c9",
"assets/assets/fonts/Roboto-Regular.ttf": "327362a7c8d487ad3f7970cc8e2aba8d",
"assets/assets/icons/architecture.png": "5f47b7a4cbc63b318b66ef140fe1fb6c",
"assets/assets/icons/date.png": "2af15f18a345c48713579921cdde4e2a",
"assets/assets/icons/delete.png": "f8714d0245c61aced7d5e5e45b53ff70",
"assets/assets/icons/delete_v2.png": "d0fc849532dbf8feeb676a2e791262ea",
"assets/assets/icons/dry.png": "46be15d4be62912e448a583d94a1cb37",
"assets/assets/icons/dry2.png": "a23af3dea9b2f2c4834856b8bf95b631",
"assets/assets/icons/forest.png": "c76651d2509b936ed64ca2babdc52687",
"assets/assets/icons/format_paint.png": "cc0d672542ef3d70d74343b6fbe3344d",
"assets/assets/icons/home.png": "50eff091e14354f523ffb2764c9aae7c",
"assets/assets/icons/inventory.png": "f4b9c60546fe91eeff4e7cbdb2988bd0",
"assets/assets/icons/location.png": "8e6ceb5fa139f6cee8779a9efcbf8361",
"assets/assets/icons/person.png": "8dd1895110eb8bdbfff1235fc1439ac8",
"assets/assets/icons/receipt_long.png": "2b02f75dbb8beac3a262786e919612b8",
"assets/assets/icons/settings.png": "87639436f9d1793204e55eeb2e933065",
"assets/assets/icons/straighten.png": "3e79e52663024a4ea7d37ac331044450",
"assets/assets/icons/today.png": "2a63c599411b236a4f703f0dcfbe2975",
"assets/assets/icons/view.png": "a692be5fd3ca31d2c483cbfc42ef61bc",
"assets/assets/icons/water_drop.png": "939f7e33e92de3898244436f270b10eb",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "deb97b5dfa9eb646adcf2eb2ce59ede2",
"assets/images/k1.png": "a82ec3b624de940f94ba1c922f6f6138",
"assets/images/logo.jpg": "02c0f1fff490c811de6866ecaf233ec5",
"assets/images/logo.png": "4ae957e21f137374e7e9cc2040edb192",
"assets/images/logo2.png": "35efa445228a9862228bfe841f84fdb8",
"assets/images/logo_1024.png": "061d02510d44d1f9211e97bb30ac4f0c",
"assets/images/logo_lang.png": "51f69fa7a216db7ea11d18246fb88245",
"assets/images/logo_lang2.png": "81c6a06170f1f619f2f965d796d3f071",
"assets/images/logo_oak.png": "92eb9010486d855735cb54945bd7de1f",
"assets/images/logo_sw.jpg": "efeb66ef736f2151ba55a194b5921094",
"assets/images/logo_weiss.png": "8111c4d641cbf969a6e6a3b84f7657a4",
"assets/images/map.png": "4f5e30c0124767b1e956af461571c223",
"assets/images/map2.png": "af775792a6820bacda30da8f4f11f052",
"assets/images/WhatsApp%2520Bild%25202024-12-22%2520um%252015.29.27_44067bf7.jpg": "06fb4619bed33e0f8485b5c69751223c",
"assets/images/WhatsApp%2520Bild%25202024-12-22%2520um%252015.29.33_de15a7aa.jpg": "72a2466d54c545e9574634732b61b269",
"assets/NOTICES": "01fbb12611ddd42411796f6a7f89a0ad",
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
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "9373b40e4046d7bf955942b94fb764af",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "1d556f6d4199f36bb28fbb31315528de",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "c4ea3913f8ef88419161505d261182a1",
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
"favicon.ico": "8eca2533d5fd564c5316b96de9ef24be",
"favicon.png": "6f16c7cc1f27ae30ae39f8819bd14ddc",
"flutter.js": "5de281a37b2308e43846d3a0b545c921",
"flutter_bootstrap.js": "8aa700966777eb85249ab9e4a595e747",
"icon-192-maskable.png": "d4aa3e0b607f589ed5b9958257e917dd",
"icon-192.png": "6eb09589caa218f1112d815742c2f028",
"icon-512-maskable.png": "b666e3b519908a2020fdebc036f976d5",
"icon-512.png": "163779c5c7c89d2b097684373823101b",
"icons/Icon-192.png": "d8174527dfd5fa82f152a5813e3e8a84",
"icons/Icon-512.png": "27dd35d6adb0ecc714ed5e17d6f00100",
"icons/Icon-maskable-192.png": "d8174527dfd5fa82f152a5813e3e8a84",
"icons/Icon-maskable-512.png": "27dd35d6adb0ecc714ed5e17d6f00100",
"index.html": "d858bb5b1f819a7b2215e2f1b818a0a6",
"/": "d858bb5b1f819a7b2215e2f1b818a0a6",
"main.dart.js": "f238b4808494e469ba208ad24c5d1d8d",
"manifest.json": "64304eff95316ff62a530e35dd44ba49",
"README.txt": "d3df3991a31f034bfa98afdfa3c622e1",
"version.json": "bc39ebc9ae45144afaf3599c264ba219"};
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
