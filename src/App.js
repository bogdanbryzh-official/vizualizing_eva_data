import React, { Component } from "react";
import { LineChart, Line } from "recharts";

const data = [
  {
    name: "5fe48028c73bec0004206cd9",
    uv: 24.3,
  },
  {
    name: "5fe48213c73bec0004206cdb",
    uv: 24.8,
  },
  {
    name: "5fe48299c73bec0004206cdd",
    uv: 25.7,
  },
  {
    name: "5fe4959552944c0004992595",
    uv: 26,
  },
  {
    name: "5fe4961352944c0004992597",
    uv: 25.9,
  },
  {
    name: "5fe4961752944c0004992599",
    uv: 25.8,
  },
  {
    name: "5fe4961c52944c000499259b",
    uv: 25.8,
  },
  {
    name: "5fe4962152944c000499259d",
    uv: 25.9,
  },
  {
    name: "5fe4962752944c000499259f",
    uv: 25.9,
  },
  {
    name: "5fe4962c52944c00049925a1",
    uv: 25.9,
  },
  {
    name: "5fe4963152944c00049925a3",
    uv: 25.9,
  },
  {
    name: "5fe4963652944c00049925a5",
    uv: 25.9,
  },
  {
    name: "5fe4963b52944c00049925a7",
    uv: 25.9,
  },
  {
    name: "5fe4964052944c00049925a9",
    uv: 25.9,
  },
  {
    name: "5fe4964552944c00049925ab",
    uv: 25.9,
  },
  {
    name: "5fe4964a52944c00049925ad",
    uv: 25.9,
  },
  {
    name: "5fe4964f52944c00049925af",
    uv: 25.9,
  },
  {
    name: "5fe4965452944c00049925b1",
    uv: 25.9,
  },
  {
    name: "5fe4965952944c00049925b3",
    uv: 25.9,
  },
  {
    name: "5fe4965e52944c00049925b5",
    uv: 25.9,
  },
  {
    name: "5fe4966452944c00049925b7",
    uv: 25.9,
  },
  {
    name: "5fe4966852944c00049925b9",
    uv: 25.9,
  },
  {
    name: "5fe4966d52944c00049925bb",
    uv: 25.9,
  },
  {
    name: "5fe4967252944c00049925bd",
    uv: 25.9,
  },
  {
    name: "5fe4967752944c00049925bf",
    uv: 25.9,
  },
  {
    name: "5fe4967c52944c00049925c1",
    uv: 25.9,
  },
  {
    name: "5fe4968152944c00049925c3",
    uv: 25.9,
  },
  {
    name: "5fe4968652944c00049925c5",
    uv: 25.9,
  },
  {
    name: "5fe4968b52944c00049925c7",
    uv: 26,
  },
  {
    name: "5fe4969052944c00049925c9",
    uv: 26,
  },
  {
    name: "5fe4969552944c00049925cb",
    uv: 26,
  },
  {
    name: "5fe4969a52944c00049925cd",
    uv: 26,
  },
  {
    name: "5fe4969f52944c00049925cf",
    uv: 26,
  },
  {
    name: "5fe496a452944c00049925d1",
    uv: 26,
  },
  {
    name: "5fe496a952944c00049925d3",
    uv: 26,
  },
  {
    name: "5fe496ae52944c00049925d5",
    uv: 26,
  },
  {
    name: "5fe496b352944c00049925d7",
    uv: 26,
  },
  {
    name: "5fe496b852944c00049925d9",
    uv: 26,
  },
  {
    name: "5fe496bd52944c00049925db",
    uv: 26,
  },
  {
    name: "5fe496c252944c00049925dd",
    uv: 26,
  },
  {
    name: "5fe496c752944c00049925df",
    uv: 26,
  },
  {
    name: "5fe496cc52944c00049925e1",
    uv: 26,
  },
  {
    name: "5fe496d152944c00049925e3",
    uv: 26,
  },
  {
    name: "5fe496d652944c00049925e5",
    uv: 26,
  },
  {
    name: "5fe496db52944c00049925e7",
    uv: 26,
  },
  {
    name: "5fe496e052944c00049925e9",
    uv: 26,
  },
  {
    name: "5fe496e552944c00049925eb",
    uv: 26,
  },
  {
    name: "5fe4984552944c00049925ed",
    uv: 25.8,
  },
  {
    name: "5fe4984a52944c00049925ef",
    uv: 25.7,
  },
  {
    name: "5fe498ca52944c00049925f1",
    uv: 25.7,
  },
  {
    name: "5fe4992952944c00049925f2",
    uv: 25.7,
  },
  {
    name: "5fe4992e52944c00049925f4",
    uv: 25.7,
  },
  {
    name: "5fe4993352944c00049925f6",
    uv: 25.7,
  },
  {
    name: "5fe4993852944c00049925f8",
    uv: 25.7,
  },
  {
    name: "5fe4993d52944c00049925fa",
    uv: 25.7,
  },
  {
    name: "5fe4994252944c00049925fc",
    uv: 25.8,
  },
  {
    name: "5fe4994752944c00049925fe",
    uv: 25.8,
  },
  {
    name: "5fe49a3f52944c00049925ff",
    uv: 25.8,
  },
  {
    name: "5fe49a4452944c0004992601",
    uv: 25.7,
  },
  {
    name: "5fe49a4952944c0004992603",
    uv: 25.7,
  },
  {
    name: "5fe49aa952944c0004992605",
    uv: 25.9,
  },
  {
    name: "5fe49aab52944c0004992607",
    uv: 25.7,
  },
  {
    name: "5fe49aaf52944c0004992609",
    uv: 25.7,
  },
  {
    name: "5fe49ab452944c000499260b",
    uv: 25.7,
  },
  {
    name: "5fe49ab952944c000499260d",
    uv: 25.7,
  },
  {
    name: "5fe49abe52944c000499260f",
    uv: 25.7,
  },
  {
    name: "5fe49ac352944c0004992611",
    uv: 25.7,
  },
  {
    name: "5fe49ac852944c0004992613",
    uv: 25.7,
  },
  {
    name: "5fe49acd52944c0004992615",
    uv: 25.7,
  },
  {
    name: "5fe49ad252944c0004992617",
    uv: 25.7,
  },
  {
    name: "5fe49ad752944c0004992619",
    uv: 25.9,
  },
  {
    name: "5fe49adc52944c000499261b",
    uv: 25.8,
  },
  {
    name: "5fe49ae152944c000499261d",
    uv: 25.9,
  },
  {
    name: "5fe49ae652944c000499261f",
    uv: 25.7,
  },
  {
    name: "5fe49aeb52944c0004992621",
    uv: 26,
  },
  {
    name: "5fe49af052944c0004992623",
    uv: 25.9,
  },
  {
    name: "5fe49af552944c0004992625",
    uv: 26,
  },
  {
    name: "5fe49afa52944c0004992627",
    uv: 26.3,
  },
  {
    name: "5fe49aff52944c0004992629",
    uv: 26.2,
  },
  {
    name: "5fe49b0452944c000499262b",
    uv: 26.3,
  },
  {
    name: "5fe49b0952944c000499262d",
    uv: 26.2,
  },
  {
    name: "5fe49b0e52944c000499262f",
    uv: 26.3,
  },
  {
    name: "5fe49b1352944c0004992631",
    uv: 26.3,
  },
  {
    name: "5fe49b1852944c0004992633",
    uv: 26.3,
  },
  {
    name: "5fe49b1d52944c0004992635",
    uv: 26.2,
  },
  {
    name: "5fe49b2252944c0004992637",
    uv: 26.3,
  },
  {
    name: "5fe49b2752944c0004992639",
    uv: 26.4,
  },
  {
    name: "5fe49b2c52944c000499263b",
    uv: 26.3,
  },
  {
    name: "5fe49b3152944c000499263d",
    uv: 26.4,
  },
  {
    name: "5fe49b3652944c000499263f",
    uv: 26.3,
  },
  {
    name: "5fe49b3b52944c0004992641",
    uv: 26.4,
  },
  {
    name: "5fe49b4052944c0004992643",
    uv: 26.3,
  },
  {
    name: "5fe49b4552944c0004992645",
    uv: 26.4,
  },
  {
    name: "5fe49b4a52944c0004992647",
    uv: 26.3,
  },
  {
    name: "5fe49b4f52944c0004992649",
    uv: 26.2,
  },
  {
    name: "5fe49b5452944c000499264b",
    uv: 26.3,
  },
  {
    name: "5fe49b9252944c000499264d",
    uv: 26.3,
  },
  {
    name: "5fe49b9452944c000499264f",
    uv: 26,
  },
  {
    name: "5fe49b9852944c0004992651",
    uv: 26.1,
  },
  {
    name: "5fe49b9d52944c0004992653",
    uv: 26,
  },
  {
    name: "5fe49ba252944c0004992655",
    uv: 25.9,
  },
  {
    name: "5fe49ba752944c0004992657",
    uv: 26.1,
  },
  {
    name: "5fe49bac52944c0004992659",
    uv: 26,
  },
  {
    name: "5fe49bb152944c000499265b",
    uv: 26,
  },
  {
    name: "5fe49bb652944c000499265d",
    uv: 26.2,
  },
  {
    name: "5fe49bbb52944c000499265f",
    uv: 26.1,
  },
  {
    name: "5fe49bc052944c0004992661",
    uv: 25.9,
  },
  {
    name: "5fe49bc552944c0004992663",
    uv: 26,
  },
  {
    name: "5fe49bca52944c0004992665",
    uv: 26.1,
  },
  {
    name: "5fe49bcf52944c0004992667",
    uv: 26,
  },
  {
    name: "5fe49bd452944c0004992669",
    uv: 26,
  },
  {
    name: "5fe49bd952944c000499266b",
    uv: 26.1,
  },
  {
    name: "5fe49bde52944c000499266d",
    uv: 26,
  },
  {
    name: "5fe49be352944c000499266f",
    uv: 26,
  },
  {
    name: "5fe49be852944c0004992671",
    uv: 26,
  },
  {
    name: "5fe49bed52944c0004992673",
    uv: 26.1,
  },
  {
    name: "5fe49bf252944c0004992675",
    uv: 26,
  },
  {
    name: "5fe49bf752944c0004992677",
    uv: 26,
  },
  {
    name: "5fe49bfc52944c0004992679",
    uv: 26,
  },
  {
    name: "5fe49c1a52944c000499267b",
    uv: 26.2,
  },
  {
    name: "5fe49c1f52944c000499267d",
    uv: 26,
  },
  {
    name: "5fe49c2452944c000499267f",
    uv: 26,
  },
  {
    name: "5fe49c2952944c0004992681",
    uv: 26,
  },
  {
    name: "5fe49c8452944c0004992683",
    uv: 25.9,
  },
  {
    name: "5fe49c8952944c0004992685",
    uv: 25.9,
  },
  {
    name: "5fe49c8e52944c0004992687",
    uv: 25.9,
  },
  {
    name: "5fe49c9352944c0004992689",
    uv: 25.9,
  },
  {
    name: "5fe49c9852944c000499268b",
    uv: 25.9,
  },
  {
    name: "5fe49c9d52944c000499268d",
    uv: 25.9,
  },
  {
    name: "5fe49ca252944c000499268f",
    uv: 25.9,
  },
  {
    name: "5fe49ca752944c0004992691",
    uv: 26,
  },
  {
    name: "5fe49cac52944c0004992693",
    uv: 26,
  },
  {
    name: "5fe49cb152944c0004992695",
    uv: 25.9,
  },
  {
    name: "5fe49cb652944c0004992697",
    uv: 25.9,
  },
  {
    name: "5fe49cbb52944c0004992699",
    uv: 26,
  },
  {
    name: "5fe49cc052944c000499269b",
    uv: 25.9,
  },
  {
    name: "5fe49cc552944c000499269d",
    uv: 25.9,
  },
  {
    name: "5fe49cca52944c000499269f",
    uv: 25.9,
  },
  {
    name: "5fe49ccf52944c00049926a1",
    uv: 25.9,
  },
  {
    name: "5fe49cd452944c00049926a3",
    uv: 25.9,
  },
  {
    name: "5fe49cde52944c00049926a5",
    uv: 25.9,
  },
  {
    name: "5fe49ce352944c00049926a7",
    uv: 25.9,
  },
  {
    name: "5fe49ce852944c00049926a9",
    uv: 25.9,
  },
  {
    name: "5fe49ced52944c00049926ab",
    uv: 25.9,
  },
  {
    name: "5fe49cfd52944c00049926ad",
    uv: 25.9,
  },
  {
    name: "5fe4a06b52944c00049926af",
    uv: 25.9,
  },
  {
    name: "5fe4a07052944c00049926b1",
    uv: 25.3,
  },
  {
    name: "5fe4a07552944c00049926b3",
    uv: 25.2,
  },
  {
    name: "5fe4b32feb076d00046909e9",
    uv: 22.9,
  },
  {
    name: "5fe4b334eb076d00046909eb",
    uv: 22.7,
  },
  {
    name: "5fe4b339eb076d00046909ed",
    uv: 22.7,
  },
  {
    name: "5fe4b536eb076d00046909ef",
    uv: 23.6,
  },
  {
    name: "5fe4b53beb076d00046909f1",
    uv: 23.4,
  },
  {
    name: "5fe4b540eb076d00046909f3",
    uv: 23.4,
  },
  {
    name: "5fe4b545eb076d00046909f5",
    uv: 23.4,
  },
  {
    name: "5fe4b54aeb076d00046909f7",
    uv: 23.4,
  },
  {
    name: "5fe4b54feb076d00046909f9",
    uv: 23.5,
  },
  {
    name: "5fe4b554eb076d00046909fb",
    uv: 23.5,
  },
  {
    name: "5fe4b559eb076d00046909fd",
    uv: 23.6,
  },
  {
    name: "5fe4b560eb076d00046909ff",
    uv: 23.6,
  },
  {
    name: "5fe4b563eb076d0004690a01",
    uv: 23.5,
  },
  {
    name: "5fe4b568eb076d0004690a03",
    uv: 23.6,
  },
  {
    name: "5fe4b56deb076d0004690a05",
    uv: 24,
  },
  {
    name: "5fe4b572eb076d0004690a07",
    uv: 24.3,
  },
  {
    name: "5fe4b577eb076d0004690a09",
    uv: 24.5,
  },
  {
    name: "5fe4b57ceb076d0004690a0b",
    uv: 24.5,
  },
  {
    name: "5fe4b581eb076d0004690a0d",
    uv: 24.5,
  },
  {
    name: "5fe4b586eb076d0004690a0f",
    uv: 24.5,
  },
  {
    name: "5fe4b58beb076d0004690a11",
    uv: 24.5,
  },
  {
    name: "5fe4b591eb076d0004690a13",
    uv: 24.5,
  },
  {
    name: "5fe4b5b4eb076d0004690a15",
    uv: 24.5,
  },
  {
    name: "5fe4b5b9eb076d0004690a17",
    uv: 24.2,
  },
  {
    name: "5fe4b5beeb076d0004690a19",
    uv: 24.2,
  },
  {
    name: "5fe4b5c3eb076d0004690a1b",
    uv: 24.2,
  },
  {
    name: "5fe4b5c8eb076d0004690a1d",
    uv: 24.2,
  },
  {
    name: "5fe4b5cdeb076d0004690a1f",
    uv: 24.2,
  },
  {
    name: "5fe4b5d2eb076d0004690a21",
    uv: 24.3,
  },
  {
    name: "5fe4b5d7eb076d0004690a23",
    uv: 24.2,
  },
  {
    name: "5fe4b5dceb076d0004690a25",
    uv: 24.1,
  },
  {
    name: "5fe4b5e1eb076d0004690a27",
    uv: 24.2,
  },
  {
    name: "5fe4b5e6eb076d0004690a29",
    uv: 24.1,
  },
  {
    name: "5fe4b5edeb076d0004690a2b",
    uv: 24.1,
  },
  {
    name: "5fe4b5f0eb076d0004690a2d",
    uv: 24.1,
  },
  {
    name: "5fe4b5f5eb076d0004690a2f",
    uv: 24.1,
  },
  {
    name: "5fe4b5faeb076d0004690a31",
    uv: 24.1,
  },
  {
    name: "5fe4b5ffeb076d0004690a33",
    uv: 24,
  },
  {
    name: "5fe4b604eb076d0004690a35",
    uv: 24,
  },
  {
    name: "5fe4b609eb076d0004690a37",
    uv: 24,
  },
  {
    name: "5fe4b60eeb076d0004690a39",
    uv: 24,
  },
  {
    name: "5fe4b613eb076d0004690a3b",
    uv: 24,
  },
  {
    name: "5fe4b618eb076d0004690a3d",
    uv: 24,
  },
  {
    name: "5fe4b61deb076d0004690a3f",
    uv: 24,
  },
  {
    name: "5fe4b622eb076d0004690a41",
    uv: 24,
  },
  {
    name: "5fe4b627eb076d0004690a43",
    uv: 24,
  },
  {
    name: "5fe4b62deb076d0004690a45",
    uv: 24,
  },
  {
    name: "5fe4b631eb076d0004690a47",
    uv: 24,
  },
  {
    name: "5fe4b636eb076d0004690a49",
    uv: 24,
  },
  {
    name: "5fe4b63beb076d0004690a4b",
    uv: 24,
  },
  {
    name: "5fe4b640eb076d0004690a4d",
    uv: 24,
  },
  {
    name: "5fe4b645eb076d0004690a4f",
    uv: 24,
  },
  {
    name: "5fe4b64aeb076d0004690a51",
    uv: 24,
  },
  {
    name: "5fe4bffb6f10a7000409fb41",
    uv: 24,
  },
  {
    name: "5fe4bfff6f10a7000409fb43",
    uv: 23.6,
  },
  {
    name: "5fe4c0046f10a7000409fb45",
    uv: 23.6,
  },
  {
    name: "5fe4c0096f10a7000409fb47",
    uv: 23.8,
  },
  {
    name: "5fe4c00e6f10a7000409fb49",
    uv: 23.8,
  },
  {
    name: "5fe4c0146f10a7000409fb4b",
    uv: 23.6,
  },
  {
    name: "5fe4c06a6f10a7000409fb4d",
    uv: 23.7,
  },
  {
    name: "5fe4c06f6f10a7000409fb4f",
    uv: 23.7,
  },
  {
    name: "5fe4c0746f10a7000409fb51",
    uv: 23.7,
  },
  {
    name: "5fe4c0796f10a7000409fb53",
    uv: 23.7,
  },
  {
    name: "5fe4c07e6f10a7000409fb55",
    uv: 23.7,
  },
  {
    name: "5fe4c0836f10a7000409fb57",
    uv: 23.7,
  },
  {
    name: "5fe4c0886f10a7000409fb59",
    uv: 23.7,
  },
  {
    name: "5fe4c08d6f10a7000409fb5b",
    uv: 23.8,
  },
  {
    name: "5fe4c0926f10a7000409fb5d",
    uv: 23.7,
  },
  {
    name: "5fe4c0976f10a7000409fb5f",
    uv: 23.8,
  },
  {
    name: "5fe4c09c6f10a7000409fb61",
    uv: 23.7,
  },
  {
    name: "5fe4c0a16f10a7000409fb63",
    uv: 23.7,
  },
  {
    name: "5fe4c0a66f10a7000409fb65",
    uv: 23.8,
  },
  {
    name: "5fe4c0ab6f10a7000409fb67",
    uv: 23.9,
  },
  {
    name: "5fe4c0b06f10a7000409fb69",
    uv: 23.8,
  },
  {
    name: "5fe4c0b56f10a7000409fb6b",
    uv: 23.7,
  },
  {
    name: "5fe4c0ba6f10a7000409fb6d",
    uv: 23.8,
  },
  {
    name: "5fe4c0bf6f10a7000409fb6f",
    uv: 23.8,
  },
  {
    name: "5fe4c0c46f10a7000409fb71",
    uv: 23.8,
  },
  {
    name: "5fe4c0c96f10a7000409fb73",
    uv: 23.8,
  },
  {
    name: "5fe4c0ce6f10a7000409fb75",
    uv: 23.8,
  },
  {
    name: "5fe4c0d36f10a7000409fb77",
    uv: 23.9,
  },
  {
    name: "5fe4c0d86f10a7000409fb79",
    uv: 23.8,
  },
  {
    name: "5fe4c0dd6f10a7000409fb7b",
    uv: 23.9,
  },
  {
    name: "5fe4c0e26f10a7000409fb7d",
    uv: 23.8,
  },
  {
    name: "5fe4c0e76f10a7000409fb7f",
    uv: 23.8,
  },
  {
    name: "5fe4c0ec6f10a7000409fb81",
    uv: 23.9,
  },
  {
    name: "5fe4c0f16f10a7000409fb83",
    uv: 23.8,
  },
  {
    name: "5fe4c0f66f10a7000409fb85",
    uv: 23.8,
  },
  {
    name: "5fe4c0fb6f10a7000409fb87",
    uv: 23.8,
  },
  {
    name: "5fe4c1006f10a7000409fb89",
    uv: 23.8,
  },
  {
    name: "5fe4c1056f10a7000409fb8b",
    uv: 23.9,
  },
  {
    name: "5fe4c10a6f10a7000409fb8d",
    uv: 23.8,
  },
  {
    name: "5fe4c10f6f10a7000409fb8f",
    uv: 23.8,
  },
  {
    name: "5fe4c1146f10a7000409fb91",
    uv: 23.9,
  },
  {
    name: "5fe96a735184790004cd951d",
    uv: 25.7,
  },
  {
    name: "5fe96df75184790004cd951f",
    uv: 25.6,
  },
  {
    name: "5fe9717b5184790004cd9521",
    uv: 25.5,
  },
  {
    name: "5fe974ff5184790004cd9523",
    uv: 25.5,
  },
  {
    name: "5fe977624d01b5000482fd19",
    uv: 25.6,
  },
  {
    name: "5fe97ae64d01b5000482fd1b",
    uv: 25.7,
  },
  {
    name: "5fe97e6a4d01b5000482fd1d",
    uv: 25.8,
  },
  {
    name: "5fe981ee4d01b5000482fd1f",
    uv: 26.1,
  },
  {
    name: "5fe982acff6f3f0004980a22",
    uv: 26.8,
  },
  {
    name: "5fe98630ff6f3f0004980a24",
    uv: 26.3,
  },
  {
    name: "5fe989b4ff6f3f0004980a26",
    uv: 26.5,
  },
  {
    name: "5fe98d38ff6f3f0004980a28",
    uv: 26.7,
  },
  {
    name: "5fe9903344f68200046e0450",
    uv: 26.5,
  },
  {
    name: "5fe993b744f68200046e0452",
    uv: 26.1,
  },
  {
    name: "5fe9973b44f68200046e0454",
    uv: 26.1,
  },
  {
    name: "5fe997f4ea98e100045c31bc",
    uv: 26.7,
  },
  {
    name: "5fe99b78ea98e100045c31be",
    uv: 26.8,
  },
  {
    name: "5fe99efcea98e100045c31c0",
    uv: 27.3,
  },
  {
    name: "5fe9a280ea98e100045c31c2",
    uv: 27.5,
  },
  {
    name: "5fe9a493c83f0a0004067254",
    uv: 27.6,
  },
  {
    name: "5fe9a817c83f0a0004067256",
    uv: 27.7,
  },
  {
    name: "5fe9ab9bc83f0a0004067258",
    uv: 27.9,
  },
  {
    name: "5fe9ad7c8784800004d03cae",
    uv: 28.1,
  },
  {
    name: "5fe9affdf6abc700047f460d",
    uv: 28,
  },
  {
    name: "5fe9b1e84112be0004128325",
    uv: 28.1,
  },
  {
    name: "5fe9b56c4112be0004128327",
    uv: 28,
  },
  {
    name: "5fe9b8f04112be0004128329",
    uv: 27.5,
  },
  {
    name: "5fe9bc744112be000412832b",
    uv: 27.1,
  },
  {
    name: "5fe9bd78110a7a00042047b9",
    uv: 27,
  },
  {
    name: "5fe9c00773b05300049e1e4f",
    uv: 26.8,
  },
  {
    name: "5fe9c38b73b05300049e1e51",
    uv: 26.8,
  },
  {
    name: "5fe9c70f73b05300049e1e53",
    uv: 26.7,
  },
  {
    name: "5fe9c925824fc1000459d45d",
    uv: 26.7,
  },
  {
    name: "5feb63883d171300044ae896",
    uv: 19.5,
  },
  {
    name: "5feb64823d171300044ae898",
    uv: 17.3,
  },
  {
    name: "5feb68063d171300044ae89a",
    uv: 17,
  },
  {
    name: "5feb713f82621b000408531a",
    uv: 16.8,
  },
  {
    name: "5feb74c382621b000408531c",
    uv: 17.5,
  },
  {
    name: "5feb75ab2b0df300049b1496",
    uv: 19.7,
  },
  {
    name: "5feb792f2b0df300049b1498",
    uv: 20.2,
  },
  {
    name: "5feb7cb32b0df300049b149a",
    uv: 21.1,
  },
  {
    name: "5feb7f8a5deb2c00044c4913",
    uv: 21.6,
  },
  {
    name: "5feb81e317c8420004975023",
    uv: 22,
  },
  {
    name: "5feb856717c8420004975025",
    uv: 22.1,
  },
  {
    name: "5feb88eb17c8420004975027",
    uv: 22.5,
  },
  {
    name: "5feb900322f5df0004a0b684",
    uv: 23,
  },
  {
    name: "5feb938722f5df0004a0b686",
    uv: 23,
  },
  {
    name: "5feb96885f27030004cc24b3",
    uv: 22.9,
  },
  {
    name: "5feb981ca48c570004b1a443",
    uv: 23,
  },
  {
    name: "5feb9a5c83c08a000461002e",
    uv: 23,
  },
  {
    name: "5feb9b87d3150100047c98e7",
    uv: 23,
  },
  {
    name: "5feb9f0bd3150100047c98e9",
    uv: 23,
  },
  {
    name: "5feba28fd3150100047c98eb",
    uv: 23.1,
  },
  {
    name: "5feba613d3150100047c98ed",
    uv: 23.1,
  },
  {
    name: "5feba99dd3150100047c98ef",
    uv: 23.3,
  },
  {
    name: "5febad21d3150100047c98f1",
    uv: 23.4,
  },
  {
    name: "5febaf6723150b0004e4d8db",
    uv: 23.3,
  },
  {
    name: "5febb2eb23150b0004e4d8dd",
    uv: 23.3,
  },
  {
    name: "5febb5880943cd000458951b",
    uv: 23.5,
  },
  {
    name: "5febb90c0943cd000458951d",
    uv: 23.4,
  },
  {
    name: "5febbc900943cd000458951f",
    uv: 23.4,
  },
  {
    name: "5febbf460943cd0004589521",
    uv: 23.8,
  },
  {
    name: "5febc1290943cd0004589523",
    uv: 23.6,
  },
  {
    name: "5febc28c0943cd0004589525",
    uv: 23.7,
  },
  {
    name: "5febc47c0943cd0004589527",
    uv: 23.5,
  },
  {
    name: "5febc48c0943cd0004589529",
    uv: 23.5,
  },
  {
    name: "5febcd0c2e60b20004fa6b6e",
    uv: 23.5,
  },
  {
    name: "5febd0902e60b20004fa6b70",
    uv: 23.5,
  },
  {
    name: "5febd4142e60b20004fa6b72",
    uv: 23.5,
  },
  {
    name: "5febd53a165c2700045f38be",
    uv: 23.7,
  },
  {
    name: "5febd8be165c2700045f38c0",
    uv: 23.7,
  },
  {
    name: "5febdc42165c2700045f38c2",
    uv: 23.7,
  },
  {
    name: "5febdd4042bab50004c155df",
    uv: 23.8,
  },
  {
    name: "5febe0c442bab50004c155e1",
    uv: 23.9,
  },
  {
    name: "5febe44842bab50004c155e3",
    uv: 23.8,
  },
  {
    name: "5febe5df762d9d00047b18ad",
    uv: 23.9,
  },
  {
    name: "5febe963762d9d00047b18af",
    uv: 23.9,
  },
  {
    name: "5febece7762d9d00047b18b1",
    uv: 23.9,
  },
  {
    name: "5febee45abf952000478465a",
    uv: 24,
  },
  {
    name: "5febf1c9abf952000478465c",
    uv: 24,
  },
  {
    name: "5febf54dabf952000478465e",
    uv: 24,
  },
  {
    name: "5febf6176043bf00047aa229",
    uv: 24,
  },
  {
    name: "5febf99b6043bf00047aa22b",
    uv: 24,
  },
  {
    name: "5febfd1f6043bf00047aa22d",
    uv: 24.1,
  },
  {
    name: "5febfe64d210370004e4f54a",
    uv: 24.4,
  },
  {
    name: "5fec01e8d210370004e4f54c",
    uv: 24.5,
  },
  {
    name: "5fec056cd210370004e4f54e",
    uv: 24.5,
  },
  {
    name: "5fec0658cd8717000439c675",
    uv: 24.5,
  },
  {
    name: "5fec09dccd8717000439c677",
    uv: 24.4,
  },
  {
    name: "5fec0d60cd8717000439c679",
    uv: 24.3,
  },
  {
    name: "5fec0f17a0df0f0004657c17",
    uv: 24.4,
  },
  {
    name: "5fec129ba0df0f0004657c19",
    uv: 24.3,
  },
  {
    name: "5fec161fa0df0f0004657c1b",
    uv: 24.4,
  },
  {
    name: "5fec177ae372ea00048085c2",
    uv: 24.3,
  },
  {
    name: "5fec1afee372ea00048085c4",
    uv: 24.4,
  },
  {
    name: "5fec1e82e372ea00048085c6",
    uv: 24.5,
  },
  {
    name: "5fec1f8b1ea30000043efe2f",
    uv: 24.8,
  },
  {
    name: "5fec230f1ea30000043efe31",
    uv: 24.7,
  },
  {
    name: "5fec26931ea30000043efe33",
    uv: 24.5,
  },
  {
    name: "5fec27a2511da300046c24cc",
    uv: 24.4,
  },
  {
    name: "5fec2b26511da300046c24ce",
    uv: 24.5,
  },
  {
    name: "5fec377ad818090004e55aa8",
    uv: 24.5,
  },
  {
    name: "5fec6db70f334b000401dc87",
    uv: 24.7,
  },
  {
    name: "5fec713b0f334b000401dc89",
    uv: 24.6,
  },
  {
    name: "5fec74bf0f334b000401dc8b",
    uv: 25,
  },
  {
    name: "5fec75863f0652000454b409",
    uv: 25.1,
  },
  {
    name: "5fec79103f0652000454b40b",
    uv: 25.1,
  },
  {
    name: "5fec7d083f0652000454b40d",
    uv: 25.2,
  },
  {
    name: "5fec7dbd3f0652000454b40f",
    uv: 25.1,
  },
  {
    name: "5fec7e903f0652000454b411",
    uv: 25.2,
  },
  {
    name: "5fec7f773f0652000454b413",
    uv: 25.2,
  },
  {
    name: "5fec82e33f0652000454b415",
    uv: 25.3,
  },
  {
    name: "5fec84b63f0652000454b417",
    uv: 24.9,
  },
  {
    name: "5fec85923f0652000454b419",
    uv: 25.1,
  },
  {
    name: "5fec861c3f0652000454b41b",
    uv: 25.1,
  },
  {
    name: "5fec931a2668d70004f9b7af",
    uv: 24.8,
  },
  {
    name: "5fec969e2668d70004f9b7b1",
    uv: 24.7,
  },
  {
    name: "5fec9a222668d70004f9b7b3",
    uv: 24.7,
  },
  {
    name: "5fec9b6fd6ca570004d999fd",
    uv: 24.6,
  },
  {
    name: "5fec9ef3d6ca570004d999ff",
    uv: 24.6,
  },
  {
    name: "5feca277d6ca570004d99a01",
    uv: 24.7,
  },
  {
    name: "5feca3d6ce3efa0004592166",
    uv: 24.5,
  },
  {
    name: "5feca75ace3efa0004592168",
    uv: 24.4,
  },
  {
    name: "5fecaadece3efa000459216a",
    uv: 24.4,
  },
  {
    name: "5fecac39e4e1bc0004d61c7f",
    uv: 24.3,
  },
  {
    name: "5fecafbde4e1bc0004d61c81",
    uv: 24.4,
  },
  {
    name: "5fecb341e4e1bc0004d61c83",
    uv: 24.2,
  },
  {
    name: "5fecb6c5e4e1bc0004d61c85",
    uv: 24.3,
  },
  {
    name: "5fecba49e4e1bc0004d61c87",
    uv: 24.2,
  },
  {
    name: "5fecbac3077f4800049973b7",
    uv: 24.3,
  },
  {
    name: "5fecbe48077f4800049973b9",
    uv: 24.3,
  },
  {
    name: "5fecc1cb077f4800049973bb",
    uv: 24.3,
  },
  {
    name: "5fecc22acffbe20004f9b750",
    uv: 24.3,
  },
  {
    name: "5fecc5aecffbe20004f9b752",
    uv: 24.3,
  },
  {
    name: "5fecc932cffbe20004f9b754",
    uv: 24.1,
  },
  {
    name: "5feccaa38cb1eb000446328f",
    uv: 24.2,
  },
  {
    name: "5fecce278cb1eb0004463291",
    uv: 24.2,
  },
  {
    name: "5fecd1ab8cb1eb0004463293",
    uv: 24.2,
  },
  {
    name: "5fecd327cfbc1700047ffed7",
    uv: 24.1,
  },
  {
    name: "5fecd6abcfbc1700047ffed9",
    uv: 24.1,
  },
  {
    name: "5fecda2fcfbc1700047ffedb",
    uv: 24.1,
  },
  {
    name: "5fecddb3cfbc1700047ffedd",
    uv: 24.1,
  },
  {
    name: "5fece137cfbc1700047ffedf",
    uv: 24.3,
  },
  {
    name: "5fece295f8b87e00040fba84",
    uv: 24.1,
  },
  {
    name: "5fece619f8b87e00040fba86",
    uv: 24.2,
  },
  {
    name: "5fece99df8b87e00040fba88",
    uv: 24.1,
  },
  {
    name: "5feced09c7cd4900042af5d1",
    uv: 24,
  },
  {
    name: "5fecf08dc7cd4900042af5d3",
    uv: 24,
  },
  {
    name: "5fecf411c7cd4900042af5d5",
    uv: 23.8,
  },
  {
    name: "5fecf795c7cd4900042af5d7",
    uv: 23.7,
  },
  {
    name: "5fecfab6e72ead000415e1b8",
    uv: 23.8,
  },
  {
    name: "5fecfe3ae72ead000415e1ba",
    uv: 23.7,
  },
  {
    name: "5fed01bee72ead000415e1bc",
    uv: 23.6,
  },
  {
    name: "5fed02b74130680004bbf56f",
    uv: 23.7,
  },
  {
    name: "5fed063b4130680004bbf571",
    uv: 23.7,
  },
  {
    name: "5fed09bf4130680004bbf573",
    uv: 23.7,
  },
  {
    name: "5fed0aa849d9f70004696493",
    uv: 23.7,
  },
  {
    name: "5fed0e2c49d9f70004696495",
    uv: 23.6,
  },
  {
    name: "5fed11b049d9f70004696497",
    uv: 23.6,
  },
  {
    name: "5fed123c06d0760004e36336",
    uv: 23.6,
  },
  {
    name: "5fed15c006d0760004e36338",
    uv: 23.6,
  },
  {
    name: "5fed194406d0760004e3633a",
    uv: 23.6,
  },
  {
    name: "5fed1a1674214e0004876913",
    uv: 23.6,
  },
  {
    name: "5fed1d9a74214e0004876915",
    uv: 23.5,
  },
  {
    name: "5fed211e74214e0004876917",
    uv: 23.5,
  },
  {
    name: "5fed224f29d8ba000491dde4",
    uv: 23.6,
  },
  {
    name: "5fed25d329d8ba000491dde6",
    uv: 23.6,
  },
  {
    name: "5fed295729d8ba000491dde8",
    uv: 23.6,
  },
  {
    name: "5fed2a3304853900048c050f",
    uv: 23.5,
  },
  {
    name: "5fed2db704853900048c0511",
    uv: 23.5,
  },
  {
    name: "5fed313b04853900048c0513",
    uv: 23.5,
  },
  {
    name: "5fed32293691350004808858",
    uv: 23.4,
  },
  {
    name: "5fed35ad369135000480885a",
    uv: 23.5,
  },
  {
    name: "5fed3931369135000480885c",
    uv: 23.4,
  },
  {
    name: "5fed3a42e820e8000462c00e",
    uv: 23.4,
  },
  {
    name: "5fed3dc6e820e8000462c010",
    uv: 23.4,
  },
  {
    name: "5fed414ae820e8000462c012",
    uv: 23.6,
  },
  {
    name: "5fed42da571f1e0004661bfb",
    uv: 23.5,
  },
  {
    name: "5fed465e571f1e0004661bfd",
    uv: 23.4,
  },
  {
    name: "5fed49e2571f1e0004661bff",
    uv: 23.4,
  },
  {
    name: "5fed4b8de816fc00042b7356",
    uv: 23.3,
  },
  {
    name: "5fed4f11e816fc00042b7358",
    uv: 23.5,
  },
  {
    name: "5fed5295e816fc00042b735a",
    uv: 23.7,
  },
  {
    name: "5fed53bf133fcb0004f1b2f8",
    uv: 23.6,
  },
  {
    name: "5fed5743133fcb0004f1b2fa",
    uv: 23.5,
  },
  {
    name: "5fed5ac7133fcb0004f1b2fc",
    uv: 23.6,
  },
  {
    name: "5fed5c1fc40e1e0004ac0ff9",
    uv: 23.6,
  },
  {
    name: "5fed5fa3c40e1e0004ac0ffb",
    uv: 23.6,
  },
  {
    name: "5fed6327c40e1e0004ac0ffd",
    uv: 23.7,
  },
  {
    name: "5fed643ed98c750004f4c953",
    uv: 23.7,
  },
  {
    name: "5fed67c2d98c750004f4c955",
    uv: 23.6,
  },
  {
    name: "5fed6b46d98c750004f4c957",
    uv: 23.7,
  },
  {
    name: "5fed6cf9c3e6b400040473ee",
    uv: 23.8,
  },
  {
    name: "5fed707dc3e6b400040473f0",
    uv: 23.8,
  },
  {
    name: "5fed7401c3e6b400040473f2",
    uv: 23.9,
  },
  {
    name: "5fed74e17bd5bf000473599b",
    uv: 23.8,
  },
  {
    name: "5fed78657bd5bf000473599d",
    uv: 23.8,
  },
  {
    name: "5fed7be97bd5bf000473599f",
    uv: 23.7,
  },
  {
    name: "5fed7d091f81ff00045a0f84",
    uv: 24,
  },
  {
    name: "5fed808d1f81ff00045a0f86",
    uv: 24,
  },
  {
    name: "5fed84111f81ff00045a0f88",
    uv: 24,
  },
  {
    name: "5fed85b7c60e450004fc53fe",
    uv: 24.1,
  },
  {
    name: "5fed893bc60e450004fc5400",
    uv: 24,
  },
  {
    name: "5fed8cbfc60e450004fc5402",
    uv: 24,
  },
  {
    name: "5fed8e387c49ea0004a7634e",
    uv: 24,
  },
  {
    name: "5fed91bc7c49ea0004a76350",
    uv: 24,
  },
  {
    name: "5fed95407c49ea0004a76352",
    uv: 24,
  },
  {
    name: "5fed9675e89e990004f5c986",
    uv: 24,
  },
  {
    name: "5fed99f9e89e990004f5c988",
    uv: 24,
  },
  {
    name: "5fed9d7de89e990004f5c98a",
    uv: 24,
  },
  {
    name: "5fed9e91ab80750004879cd8",
    uv: 24,
  },
  {
    name: "5feda215ab80750004879cda",
    uv: 24,
  },
  {
    name: "5feda599ab80750004879cdc",
    uv: 24,
  },
  {
    name: "5feda71d9dbc300004fafba6",
    uv: 24,
  },
  {
    name: "5fedaaa19dbc300004fafba8",
    uv: 24,
  },
  {
    name: "5fedae259dbc300004fafbaa",
    uv: 24.1,
  },
  {
    name: "5fedb1a99dbc300004fafbac",
    uv: 24.2,
  },
  {
    name: "5fedb3f12ec3090004ede8a5",
    uv: 24.2,
  },
  {
    name: "5fedb7752ec3090004ede8a7",
    uv: 24.3,
  },
  {
    name: "5fedbaf92ec3090004ede8a9",
    uv: 24.2,
  },
  {
    name: "5fedbc251bd0d70004a26925",
    uv: 24.3,
  },
  {
    name: "5fedbfa91bd0d70004a26927",
    uv: 24.3,
  },
  {
    name: "5fedc32d1bd0d70004a26929",
    uv: 24.4,
  },
  {
    name: "5fedc4984d73710004f39172",
    uv: 24.5,
  },
  {
    name: "5fedc81c4d73710004f39174",
    uv: 24.5,
  },
  {
    name: "5fedcba04d73710004f39176",
    uv: 24.6,
  },
  {
    name: "5fedccafa55c22000414625d",
    uv: 24.7,
  },
  {
    name: "5fedd033a55c22000414625f",
    uv: 24.6,
  },
  {
    name: "5fedd3b7a55c220004146261",
    uv: 24.7,
  },
  {
    name: "5fedd4c18be4c80004c9da7d",
    uv: 24.5,
  },
  {
    name: "5fedd8458be4c80004c9da7f",
    uv: 24.5,
  },
  {
    name: "5feddbc98be4c80004c9da81",
    uv: 24.4,
  },
  {
    name: "5feddcb66e737b0004827c9c",
    uv: 24.3,
  },
  {
    name: "5fede03a6e737b0004827c9e",
    uv: 24.3,
  },
  {
    name: "5fede3be6e737b0004827ca0",
    uv: 24.2,
  },
  {
    name: "5fede4da321944000491a079",
    uv: 24.1,
  },
  {
    name: "5fede85e321944000491a07b",
    uv: 24.1,
  },
  {
    name: "5fedebe2321944000491a07d",
    uv: 24,
  },
  {
    name: "5fedece6352c870004ee664c",
    uv: 24,
  },
  {
    name: "5fedf06a352c870004ee664e",
    uv: 24,
  },
  {
    name: "5fedf3ee352c870004ee6650",
    uv: 24,
  },
  {
    name: "5fedf772352c870004ee6652",
    uv: 23.9,
  },
  {
    name: "5fedf7afe013f8000407ffce",
    uv: 23.9,
  },
  {
    name: "5fedfb33e013f8000407ffd0",
    uv: 23.9,
  },
  {
    name: "5fedfeb7e013f8000407ffd2",
    uv: 23.9,
  },
  {
    name: "5fedff30e013f8000407ffd4",
    uv: 23.9,
  },
  {
    name: "5fee02b4e013f8000407ffd6",
    uv: 23.9,
  },
  {
    name: "5fee0638e013f8000407ffd8",
    uv: 23.9,
  },
  {
    name: "5fee07c8ab49b60004466ca2",
    uv: 23.8,
  },
  {
    name: "5fee0b4cab49b60004466ca4",
    uv: 23.8,
  },
  {
    name: "5fee0ed0ab49b60004466ca6",
    uv: 23.8,
  },
  {
    name: "5fee0fe38d326b0004ff8169",
    uv: 23.8,
  },
  {
    name: "5fee13678d326b0004ff816b",
    uv: 23.9,
  },
  {
    name: "5fee16eb8d326b0004ff816d",
    uv: 23.7,
  },
  {
    name: "5fee181d406e9b0004bd520f",
    uv: 23.7,
  },
  {
    name: "5fee1ba1406e9b0004bd5211",
    uv: 23.7,
  },
  {
    name: "5fee1f25406e9b0004bd5213",
    uv: 23.7,
  },
  {
    name: "5fee22a9406e9b0004bd5215",
    uv: 23.7,
  },
  {
    name: "5fee262d406e9b0004bd5217",
    uv: 23.7,
  },
  {
    name: "5fee29b1406e9b0004bd5219",
    uv: 23.6,
  },
  {
    name: "5fee2d35406e9b0004bd521b",
    uv: 23.6,
  },
  {
    name: "5fee2ec609eec60004f7e241",
    uv: 23.6,
  },
  {
    name: "5fee324a09eec60004f7e243",
    uv: 23.7,
  },
  {
    name: "5fee35cd09eec60004f7e245",
    uv: 23.7,
  },
  {
    name: "5fee36f35dd64e000405aea3",
    uv: 23.7,
  },
  {
    name: "5fee3a775dd64e000405aea5",
    uv: 23.5,
  },
  {
    name: "5fee3dfb5dd64e000405aea7",
    uv: 23.6,
  },
  {
    name: "5fee3f2ccf2fe90004102a7d",
    uv: 23.4,
  },
  {
    name: "5fee42b0cf2fe90004102a7f",
    uv: 23.4,
  },
  {
    name: "5fee4634cf2fe90004102a81",
    uv: 23.5,
  },
  {
    name: "5fee49b8cf2fe90004102a83",
    uv: 23.3,
  },
  {
    name: "5fee4d3ccf2fe90004102a85",
    uv: 23.3,
  },
  {
    name: "5fee4eca5c79210004754936",
    uv: 23.4,
  },
  {
    name: "5fee524e5c79210004754938",
    uv: 23.3,
  },
  {
    name: "5fee55d25c7921000475493a",
    uv: 23.4,
  },
  {
    name: "5fee56aa98af23000418c6d4",
    uv: 23.4,
  },
  {
    name: "5fee5a2e98af23000418c6d6",
    uv: 23.3,
  },
  {
    name: "5fee5db298af23000418c6d8",
    uv: 23.5,
  },
  {
    name: "5fee613698af23000418c6da",
    uv: 23.4,
  },
  {
    name: "5fee648b68c0a500043c5e94",
    uv: 23.3,
  },
  {
    name: "5fee680f68c0a500043c5e96",
    uv: 23.3,
  },
  {
    name: "5fee6b9368c0a500043c5e98",
    uv: 23.3,
  },
  {
    name: "5fee6c7f027d4e00045b6afd",
    uv: 23.2,
  },
  {
    name: "5fee7003027d4e00045b6aff",
    uv: 23.3,
  },
  {
    name: "5fee7387027d4e00045b6b01",
    uv: 23.4,
  },
  {
    name: "5fee770b027d4e00045b6b03",
    uv: 23.3,
  },
  {
    name: "5fee7a547cd0c10004f4f5d3",
    uv: 23.3,
  },
  {
    name: "5fee7dd87cd0c10004f4f5d5",
    uv: 23.3,
  },
  {
    name: "5fee815c7cd0c10004f4f5d7",
    uv: 23.3,
  },
  {
    name: "5fee82e4fcec07000405a546",
    uv: 23.3,
  },
  {
    name: "5fee8668fcec07000405a548",
    uv: 23.2,
  },
  {
    name: "5fee89ecfcec07000405a54a",
    uv: 23.2,
  },
  {
    name: "5fee8a9c2be0a70004192f84",
    uv: 23.3,
  },
  {
    name: "5fee8e202be0a70004192f86",
    uv: 23.2,
  },
  {
    name: "5fee91a42be0a70004192f88",
    uv: 23.4,
  },
  {
    name: "5fee924594efae0004457e1c",
    uv: 23.2,
  },
  {
    name: "5fee95c994efae0004457e1e",
    uv: 23.2,
  },
  {
    name: "5fee994d94efae0004457e20",
    uv: 23.2,
  },
  {
    name: "5fee9a76ea18030004756318",
    uv: 23.2,
  },
  {
    name: "5fee9dfaea1803000475631a",
    uv: 23.2,
  },
  {
    name: "5feea17eea1803000475631c",
    uv: 23.4,
  },
  {
    name: "5feea2807ad9b300046d7c28",
    uv: 23.6,
  },
  {
    name: "5feea6047ad9b300046d7c2a",
    uv: 23.5,
  },
  {
    name: "5feea9887ad9b300046d7c2c",
    uv: 23.3,
  },
  {
    name: "5feeab69c522af0004a745e4",
    uv: 23.3,
  },
  {
    name: "5feeaeedc522af0004a745e6",
    uv: 23.2,
  },
  {
    name: "5feeb271c522af0004a745e8",
    uv: 23.2,
  },
  {
    name: "5feeb363c615820004c9b281",
    uv: 23.3,
  },
  {
    name: "5feeb6e7c615820004c9b283",
    uv: 23.3,
  },
  {
    name: "5feeba6bc615820004c9b285",
    uv: 23.3,
  },
  {
    name: "5feebbd4a977750004771b07",
    uv: 23.3,
  },
  {
    name: "5feebf58a977750004771b09",
    uv: 23.4,
  },
  {
    name: "5feec2dca977750004771b0b",
    uv: 23.4,
  },
  {
    name: "5feec3b4613ab10004669d30",
    uv: 23.5,
  },
  {
    name: "5feec737613ab10004669d32",
    uv: 23.5,
  },
  {
    name: "5feecabb613ab10004669d34",
    uv: 23.5,
  },
  {
    name: "5feecc3176f9c700042099d9",
    uv: 23.4,
  },
  {
    name: "5feecfb576f9c700042099db",
    uv: 23.4,
  },
  {
    name: "5feed33976f9c700042099dd",
    uv: 23.3,
  },
  {
    name: "5feed40553ae360004c6d085",
    uv: 23.4,
  },
  {
    name: "5feed78953ae360004c6d087",
    uv: 23.4,
  },
  {
    name: "5feedb0d53ae360004c6d089",
    uv: 23.5,
  },
  {
    name: "5feedc05f679b00004df4a9e",
    uv: 23.4,
  },
  {
    name: "5feedf89f679b00004df4aa0",
    uv: 23.5,
  },
  {
    name: "5feee30df679b00004df4aa2",
    uv: 23.6,
  },
  {
    name: "5feee483e9f6640004d26cb4",
    uv: 23.5,
  },
  {
    name: "5feee807e9f6640004d26cb6",
    uv: 23.7,
  },
  {
    name: "5feeeb8be9f6640004d26cb8",
    uv: 23.6,
  },
  {
    name: "5feeecbb10a90e0004cfe2d5",
    uv: 23.6,
  },
  {
    name: "5feef03f10a90e0004cfe2d7",
    uv: 23.6,
  },
  {
    name: "5feef3c310a90e0004cfe2d9",
    uv: 23.7,
  },
  {
    name: "5feef4d7bf670400047270fb",
    uv: 23.8,
  },
  {
    name: "5feef85bbf670400047270fd",
    uv: 23.8,
  },
  {
    name: "5feefbdfbf670400047270ff",
    uv: 23.8,
  },
  {
    name: "5feeff63bf67040004727101",
    uv: 23.9,
  },
  {
    name: "5fef02e7bf67040004727103",
    uv: 24.1,
  },
  {
    name: "5fef053140d5a60004d7fd21",
    uv: 24.1,
  },
  {
    name: "5fef08b540d5a60004d7fd23",
    uv: 24.1,
  },
  {
    name: "5fef0c3940d5a60004d7fd25",
    uv: 24.2,
  },
  {
    name: "5fef0d6684cf03000413c0e2",
    uv: 24.4,
  },
  {
    name: "5fef10ea84cf03000413c0e4",
    uv: 24.3,
  },
  {
    name: "5fef146e84cf03000413c0e6",
    uv: 24.4,
  },
  {
    name: "5fef156f0a08f6000414fd08",
    uv: 24.5,
  },
  {
    name: "5fef18f30a08f6000414fd0a",
    uv: 24.6,
  },
  {
    name: "5fef1c770a08f6000414fd0c",
    uv: 24.6,
  },
  {
    name: "5fef1dab98fbd30004839987",
    uv: 24.6,
  },
  {
    name: "5fef212f98fbd30004839989",
    uv: 24.6,
  },
  {
    name: "5fef24b398fbd3000483998b",
    uv: 24.6,
  },
  {
    name: "5fef25136920ef0004ccb0d3",
    uv: 24.5,
  },
  {
    name: "5fef28976920ef0004ccb0d5",
    uv: 24.5,
  },
  {
    name: "5fef2c1b6920ef0004ccb0d7",
    uv: 24.3,
  },
  {
    name: "5fef2d6e78b1f8000414dd19",
    uv: 24.3,
  },
  {
    name: "5fef30f278b1f8000414dd1b",
    uv: 24.2,
  },
  {
    name: "5fef347678b1f8000414dd1d",
    uv: 24.1,
  },
  {
    name: "5fef359aaf8eca00041b926a",
    uv: 24.1,
  },
  {
    name: "5fef391eaf8eca00041b926c",
    uv: 24.1,
  },
  {
    name: "5fef3ca2af8eca00041b926e",
    uv: 24.1,
  },
  {
    name: "5fef3e2cd47edd000492230c",
    uv: 24.1,
  },
  {
    name: "5fef41b0d47edd000492230e",
    uv: 24,
  },
  {
    name: "5fef4534d47edd0004922310",
    uv: 24,
  },
  {
    name: "5fef483b2fe7e60004114763",
    uv: 23.9,
  },
  {
    name: "5fef4bbf2fe7e60004114765",
    uv: 23.9,
  },
  {
    name: "5fef4f432fe7e60004114767",
    uv: 23.9,
  },
  {
    name: "5fef501e6a9d1d0004f46f8d",
    uv: 23.9,
  },
  {
    name: "5fef53a26a9d1d0004f46f8f",
    uv: 23.8,
  },
  {
    name: "5fef57266a9d1d0004f46f91",
    uv: 23.8,
  },
  {
    name: "5fef5aaa6a9d1d0004f46f93",
    uv: 23.7,
  },
  {
    name: "5fef5bd88dfd410004b5f31f",
    uv: 23.7,
  },
  {
    name: "5fef5f5c8dfd410004b5f321",
    uv: 23.7,
  },
  {
    name: "5fef62e08dfd410004b5f323",
    uv: 23.7,
  },
  {
    name: "5fef644eadf8ec0004408703",
    uv: 23.6,
  },
  {
    name: "5fef67d2adf8ec0004408705",
    uv: 23.7,
  },
  {
    name: "5fef6b56adf8ec0004408707",
    uv: 23.7,
  },
  {
    name: "5fef6ccbb5607d0004f8be1f",
    uv: 23.6,
  },
  {
    name: "5fef704fb5607d0004f8be21",
    uv: 23.5,
  },
  {
    name: "5fef73d3b5607d0004f8be23",
    uv: 23.6,
  },
  {
    name: "5fef75581adbbc000405cf79",
    uv: 23.5,
  },
  {
    name: "5fef78dc1adbbc000405cf7b",
    uv: 23.5,
  },
  {
    name: "5fef7c601adbbc000405cf7d",
    uv: 23.5,
  },
  {
    name: "5fef7d98062ebd0004bf3606",
    uv: 23.5,
  },
  {
    name: "5fef811c062ebd0004bf3608",
    uv: 23.5,
  },
  {
    name: "5fef84a0062ebd0004bf360a",
    uv: 23.7,
  },
  {
    name: "5fef883693da2c000466aea6",
    uv: 23.6,
  },
  {
    name: "5fef8bba93da2c000466aea8",
    uv: 23.5,
  },
  {
    name: "5fef8f3e93da2c000466aeaa",
    uv: 23.4,
  },
  {
    name: "5fef92c293da2c000466aeac",
    uv: 23.4,
  },
  {
    name: "5fef95296e551f0004dfaaa1",
    uv: 23.4,
  },
  {
    name: "5fef98ad6e551f0004dfaaa3",
    uv: 23.3,
  },
  {
    name: "5fef9c316e551f0004dfaaa5",
    uv: 23.2,
  },
  {
    name: "5fef9d789e2d09000456175d",
    uv: 23.2,
  },
  {
    name: "5fefa0fc9e2d09000456175f",
    uv: 23.3,
  },
  {
    name: "5fefa4809e2d090004561761",
    uv: 23.2,
  },
  {
    name: "5fefa8049e2d090004561763",
    uv: 23.1,
  },
  {
    name: "5fefab889e2d090004561765",
    uv: 23.1,
  },
  {
    name: "5fefaeba74103d0004b8cc95",
    uv: 23.1,
  },
  {
    name: "5fefb23e74103d0004b8cc97",
    uv: 23.1,
  },
  {
    name: "5fefb5c274103d0004b8cc99",
    uv: 23.1,
  },
  {
    name: "5fefb63308a64f0004527a0c",
    uv: 23.1,
  },
  {
    name: "5fefb9b708a64f0004527a0e",
    uv: 23,
  },
  {
    name: "5fefbd3b08a64f0004527a10",
    uv: 23.1,
  },
  {
    name: "5fefbe1c7a97c800041108ef",
    uv: 23.1,
  },
  {
    name: "5fefc1a07a97c800041108f1",
    uv: 23,
  },
  {
    name: "5fefc5247a97c800041108f3",
    uv: 23,
  },
  {
    name: "5fefc6693037620004ee01ba",
    uv: 23.1,
  },
  {
    name: "5fefc9ed3037620004ee01bc",
    uv: 23,
  },
  {
    name: "5fefcd713037620004ee01be",
    uv: 23,
  },
  {
    name: "5fefce5ced22ea00046f98db",
    uv: 23,
  },
  {
    name: "5fefd1e0ed22ea00046f98dd",
    uv: 23,
  },
  {
    name: "5fefd564ed22ea00046f98df",
    uv: 23,
  },
  {
    name: "5fefd66fe2a0960004278d51",
    uv: 23,
  },
  {
    name: "5fefd9f3e2a0960004278d53",
    uv: 23,
  },
  {
    name: "5fefdd77e2a0960004278d55",
    uv: 23,
  },
  {
    name: "5fefde7085f7d10004c0d135",
    uv: 23.1,
  },
  {
    name: "5fefe1f485f7d10004c0d137",
    uv: 23,
  },
  {
    name: "5fefe57885f7d10004c0d139",
    uv: 23,
  },
  {
    name: "5fefe6b096ce2f0004d137c7",
    uv: 23,
  },
  {
    name: "5fefea3496ce2f0004d137c9",
    uv: 23,
  },
  {
    name: "5fefedb896ce2f0004d137cb",
    uv: 23,
  },
  {
    name: "5fefeee3e064850004cd66aa",
    uv: 23,
  },
  {
    name: "5feff267e064850004cd66ac",
    uv: 23.1,
  },
  {
    name: "5feff5ebe064850004cd66ae",
    uv: 23.2,
  },
  {
    name: "5feff6ba57ad7d00046f22ef",
    uv: 23.1,
  },
  {
    name: "5feffa3e57ad7d00046f22f1",
    uv: 23.1,
  },
  {
    name: "5feffdc257ad7d00046f22f3",
    uv: 23,
  },
  {
    name: "5feffe75b0b0da0004a8d430",
    uv: 23.1,
  },
  {
    name: "5ff001f9b0b0da0004a8d432",
    uv: 23,
  },
  {
    name: "5ff0057db0b0da0004a8d434",
    uv: 23.1,
  },
  {
    name: "5ff0065c592c220004797cf8",
    uv: 23,
  },
  {
    name: "5ff009e0592c220004797cfa",
    uv: 23,
  },
  {
    name: "5ff00d64592c220004797cfc",
    uv: 23.1,
  },
  {
    name: "5ff00e5694653e0004f544ef",
    uv: 23,
  },
  {
    name: "5ff011da94653e0004f544f1",
    uv: 23.1,
  },
  {
    name: "5ff0155e94653e0004f544f3",
    uv: 23.1,
  },
  {
    name: "5ff016617ac4ee00042cba2c",
    uv: 23.2,
  },
  {
    name: "5ff019e57ac4ee00042cba2e",
    uv: 23.3,
  },
  {
    name: "5ff01d697ac4ee00042cba30",
    uv: 23.2,
  },
  {
    name: "5ff01e107fea550004f63dab",
    uv: 23.2,
  },
  {
    name: "5ff021947fea550004f63dad",
    uv: 23.3,
  },
  {
    name: "5ff025187fea550004f63daf",
    uv: 23.3,
  },
  {
    name: "5ff02634440b7a00049246dd",
    uv: 23.3,
  },
  {
    name: "5ff029b8440b7a00049246df",
    uv: 23.3,
  },
  {
    name: "5ff02b33440b7a00049246e1",
    uv: 23.3,
  },
  {
    name: "5ff02eb7440b7a00049246e3",
    uv: 23.3,
  },
  {
    name: "5ff0323b440b7a00049246e5",
    uv: 23.3,
  },
  {
    name: "5ff033793d56fb00046e86b7",
    uv: 23.3,
  },
  {
    name: "5ff036fd3d56fb00046e86b9",
    uv: 23.3,
  },
  {
    name: "5ff03a813d56fb00046e86bb",
    uv: 23.4,
  },
  {
    name: "5ff03bdc5e199800041fa603",
    uv: 23.3,
  },
  {
    name: "5ff03f605e199800041fa605",
    uv: 23.3,
  },
  {
    name: "5ff042e45e199800041fa607",
    uv: 23.3,
  },
  {
    name: "5ff04416ae247500040f7ee2",
    uv: 23.3,
  },
  {
    name: "5ff0479aae247500040f7ee4",
    uv: 23.2,
  },
  {
    name: "5ff04b1eae247500040f7ee6",
    uv: 23.3,
  },
  {
    name: "5ff04c9d33f9a40004be8520",
    uv: 23.3,
  },
  {
    name: "5ff0502133f9a40004be8522",
    uv: 23.3,
  },
  {
    name: "5ff053a533f9a40004be8524",
    uv: 23.4,
  },
  {
    name: "5ff05445015c690004f110a8",
    uv: 23.4,
  },
  {
    name: "5ff057c9015c690004f110aa",
    uv: 23.3,
  },
  {
    name: "5ff05b4d015c690004f110ac",
    uv: 23.3,
  },
  {
    name: "5ff05c3e34760500048f3b89",
    uv: 23.2,
  },
  {
    name: "5ff05fc234760500048f3b8b",
    uv: 23.2,
  },
  {
    name: "5ff0634634760500048f3b8d",
    uv: 23.2,
  },
  {
    name: "5ff0646b84b54c0004ed1190",
    uv: 23.1,
  },
  {
    name: "5ff067ef84b54c0004ed1192",
    uv: 23.2,
  },
  {
    name: "5ff06b7384b54c0004ed1194",
    uv: 23.1,
  },
  {
    name: "5ff06c13439fc60004aff992",
    uv: 23,
  },
  {
    name: "5ff06f97439fc60004aff994",
    uv: 23,
  },
  {
    name: "5ff0731b439fc60004aff996",
    uv: 23.1,
  },
  {
    name: "5ff07422e81bd900041945be",
    uv: 23.1,
  },
  {
    name: "5ff077a6e81bd900041945c0",
    uv: 23,
  },
  {
    name: "5ff07b2ae81bd900041945c2",
    uv: 23,
  },
  {
    name: "5ff07eaee81bd900041945c4",
    uv: 23,
  },
  {
    name: "5ff08232e81bd900041945c6",
    uv: 23,
  },
  {
    name: "5ff083e7a8bc580004007940",
    uv: 22.9,
  },
  {
    name: "5ff0876ba8bc580004007942",
    uv: 22.9,
  },
  {
    name: "5ff08aefa8bc580004007944",
    uv: 22.9,
  },
  {
    name: "5ff08bd6f265af0004eec594",
    uv: 22.9,
  },
  {
    name: "5ff08f5af265af0004eec596",
    uv: 22.9,
  },
  {
    name: "5ff092def265af0004eec598",
    uv: 23,
  },
  {
    name: "5ff09662f265af0004eec59a",
    uv: 23,
  },
  {
    name: "5ff099e6f265af0004eec59c",
    uv: 23,
  },
  {
    name: "5ff09c9c01a0c700045c7f06",
    uv: 23,
  },
  {
    name: "5ff0a02001a0c700045c7f08",
    uv: 22.9,
  },
  {
    name: "5ff0a3a401a0c700045c7f0a",
    uv: 22.9,
  },
  {
    name: "5ff0a4fa9f969800047db7e0",
    uv: 23,
  },
  {
    name: "5ff0a87e9f969800047db7e2",
    uv: 22.9,
  },
  {
    name: "5ff0ac029f969800047db7e4",
    uv: 23,
  },
  {
    name: "5ff0ad5f98dc9800044ca461",
    uv: 23,
  },
  {
    name: "5ff0b0e398dc9800044ca463",
    uv: 23.1,
  },
  {
    name: "5ff0b46798dc9800044ca465",
    uv: 23,
  },
  {
    name: "5ff0b54fdfd47a0004665c7b",
    uv: 23,
  },
  {
    name: "5ff0b8d3dfd47a0004665c7d",
    uv: 22.9,
  },
  {
    name: "5ff0bc57dfd47a0004665c7f",
    uv: 22.9,
  },
  {
    name: "5ff0bfdbdfd47a0004665c81",
    uv: 23,
  },
  {
    name: "5ff0c35fdfd47a0004665c83",
    uv: 23,
  },
  {
    name: "5ff0c54c7437440004c56c93",
    uv: 22.9,
  },
  {
    name: "5ff0c8d07437440004c56c95",
    uv: 22.9,
  },
  {
    name: "5ff0cc547437440004c56c97",
    uv: 22.9,
  },
  {
    name: "5ff0cd2e28854d00046af7cb",
    uv: 22.9,
  },
  {
    name: "5ff0d0b228854d00046af7cd",
    uv: 22.9,
  },
  {
    name: "5ff0d43628854d00046af7cf",
    uv: 23,
  },
  {
    name: "5ff0d4ba5ad50500041c3c29",
    uv: 22.9,
  },
  {
    name: "5ff0d83e5ad50500041c3c2b",
    uv: 22.9,
  },
  {
    name: "5ff0dbc25ad50500041c3c2d",
    uv: 22.9,
  },
  {
    name: "5ff0df465ad50500041c3c2f",
    uv: 22.9,
  },
  {
    name: "5ff0e1b3cfe3ad0004672c12",
    uv: 22.8,
  },
  {
    name: "5ff0e537cfe3ad0004672c14",
    uv: 22.7,
  },
  {
    name: "5ff0e8bbcfe3ad0004672c16",
    uv: 22.7,
  },
  {
    name: "5ff0e9de70cefd00042b4015",
    uv: 22.7,
  },
  {
    name: "5ff0ed6270cefd00042b4017",
    uv: 22.6,
  },
  {
    name: "5ff0f0e670cefd00042b4019",
    uv: 22.6,
  },
  {
    name: "5ff0f18ec4c5c60004662ff6",
    uv: 22.5,
  },
  {
    name: "5ff0f512c4c5c60004662ff8",
    uv: 22.5,
  },
  {
    name: "5ff0f896c4c5c60004662ffa",
    uv: 22.6,
  },
  {
    name: "5ff0f96b4cbd590004e40386",
    uv: 22.6,
  },
  {
    name: "5ff0fcef4cbd590004e40388",
    uv: 22.6,
  },
  {
    name: "5ff100734cbd590004e4038a",
    uv: 22.5,
  },
  {
    name: "5ff10217c5acf50004d1072b",
    uv: 22.5,
  },
  {
    name: "5ff1059bc5acf50004d1072d",
    uv: 22.6,
  },
  {
    name: "5ff1091fc5acf50004d1072f",
    uv: 22.5,
  },
  {
    name: "5ff10aa445fe600004aec9fd",
    uv: 22.5,
  },
  {
    name: "5ff10e2845fe600004aec9ff",
    uv: 22.6,
  },
  {
    name: "5ff111ac45fe600004aeca01",
    uv: 22.5,
  },
  {
    name: "5ff1130200fc52000479ab24",
    uv: 22.6,
  },
  {
    name: "5ff1168600fc52000479ab26",
    uv: 22.5,
  },
  {
    name: "5ff11a0a00fc52000479ab28",
    uv: 22.5,
  },
  {
    name: "5ff11b1750b32c0004bc180c",
    uv: 22.6,
  },
  {
    name: "5ff11e9b50b32c0004bc180e",
    uv: 22.6,
  },
  {
    name: "5ff1221f50b32c0004bc1810",
    uv: 22.6,
  },
  {
    name: "5ff12369ce83d700040d6d14",
    uv: 22.6,
  },
  {
    name: "5ff126edce83d700040d6d16",
    uv: 22.6,
  },
  {
    name: "5ff12a71ce83d700040d6d18",
    uv: 22.6,
  },
  {
    name: "5ff12b7c3325250004481931",
    uv: 22.5,
  },
  {
    name: "5ff12f003325250004481933",
    uv: 22.6,
  },
  {
    name: "5ff132843325250004481935",
    uv: 22.5,
  },
  {
    name: "5ff133669306db000489f49c",
    uv: 22.6,
  },
  {
    name: "5ff136ea9306db000489f49e",
    uv: 22.6,
  },
  {
    name: "5ff13a6e9306db000489f4a0",
    uv: 22.6,
  },
  {
    name: "5ff13be6a6099b000427981b",
    uv: 22.5,
  },
  {
    name: "5ff13f6aa6099b000427981d",
    uv: 22.7,
  },
  {
    name: "5ff142eea6099b000427981f",
    uv: 22.8,
  },
  {
    name: "5ff1445805ba850004fdfdd6",
    uv: 23,
  },
  {
    name: "5ff147dc05ba850004fdfdd8",
    uv: 23,
  },
  {
    name: "5ff14b6005ba850004fdfdda",
    uv: 22.8,
  },
  {
    name: "5ff14c385bcf080004cf6d3f",
    uv: 22.7,
  },
  {
    name: "5ff14fbc5bcf080004cf6d41",
    uv: 22.7,
  },
  {
    name: "5ff153405bcf080004cf6d43",
    uv: 22.8,
  },
  {
    name: "5ff153a62013f40004d41304",
    uv: 22.9,
  },
  {
    name: "5ff1572a2013f40004d41306",
    uv: 22.8,
  },
  {
    name: "5ff15aae2013f40004d41308",
    uv: 22.8,
  },
  {
    name: "5ff15bcd68e387000424916b",
    uv: 22.8,
  },
  {
    name: "5ff15f5168e387000424916d",
    uv: 22.8,
  },
  {
    name: "5ff162d568e387000424916f",
    uv: 22.9,
  },
  {
    name: "5ff163dc880cb2000416d9b6",
    uv: 23,
  },
  {
    name: "5ff16760880cb2000416d9b8",
    uv: 23,
  },
  {
    name: "5ff16ae3880cb2000416d9ba",
    uv: 23,
  },
  {
    name: "5ff16b997f0fb60004e30abf",
    uv: 23,
  },
  {
    name: "5ff16f1d7f0fb60004e30ac1",
    uv: 23,
  },
  {
    name: "5ff172a17f0fb60004e30ac3",
    uv: 23,
  },
  {
    name: "5ff173c353a26000044d4768",
    uv: 23,
  },
  {
    name: "5ff1774753a26000044d476a",
    uv: 23,
  },
  {
    name: "5ff17acb53a26000044d476c",
    uv: 23,
  },
  {
    name: "5ff17c416effb100043a3082",
    uv: 23,
  },
  {
    name: "5ff17fc56effb100043a3084",
    uv: 23,
  },
  {
    name: "5ff183496effb100043a3086",
    uv: 23,
  },
  {
    name: "5ff184a2ab6e31000467632b",
    uv: 23.2,
  },
  {
    name: "5ff18826ab6e31000467632d",
    uv: 23.3,
  },
  {
    name: "5ff18baaab6e31000467632f",
    uv: 23.2,
  },
  {
    name: "5ff18c4dc8ca660004d30cae",
    uv: 23.2,
  },
  {
    name: "5ff18fd1c8ca660004d30cb0",
    uv: 23.1,
  },
  {
    name: "5ff19355c8ca660004d30cb2",
    uv: 23.1,
  },
  {
    name: "5ff19493b3f57a0004242e40",
    uv: 23.1,
  },
  {
    name: "5ff19817b3f57a0004242e42",
    uv: 23.1,
  },
  {
    name: "5ff19b9bb3f57a0004242e44",
    uv: 23.2,
  },
  {
    name: "5ff19c62505a680004767bb7",
    uv: 23.2,
  },
  {
    name: "5ff19fe6505a680004767bb9",
    uv: 23.2,
  },
  {
    name: "5ff1a36a505a680004767bbb",
    uv: 23.2,
  },
  {
    name: "5ff1a423b80f7f0004037d46",
    uv: 23.4,
  },
  {
    name: "5ff1a7a7b80f7f0004037d48",
    uv: 23.3,
  },
  {
    name: "5ff1ab2bb80f7f0004037d4a",
    uv: 23.3,
  },
  {
    name: "5ff1af82edd548000436f8b2",
    uv: 23.2,
  },
  {
    name: "5ff1b306edd548000436f8b4",
    uv: 23.3,
  },
  {
    name: "5ff1b356aefff100044df8fa",
    uv: 23.2,
  },
  {
    name: "5ff1b6daaefff100044df8fc",
    uv: 23.3,
  },
  {
    name: "5ff1ba5eaefff100044df8fe",
    uv: 23.3,
  },
  {
    name: "5ff1bb6dbe4a4b0004442ed6",
    uv: 23.2,
  },
  {
    name: "5ff1bef1be4a4b0004442ed8",
    uv: 23.2,
  },
  {
    name: "5ff1c275be4a4b0004442eda",
    uv: 23.4,
  },
  {
    name: "5ff1c3632a1d9e000425a655",
    uv: 23.4,
  },
  {
    name: "5ff1c6e72a1d9e000425a657",
    uv: 23.4,
  },
  {
    name: "5ff1ca6b2a1d9e000425a659",
    uv: 23.4,
  },
  {
    name: "5ff1cc089fd1410004cbaf56",
    uv: 23.2,
  },
  {
    name: "5ff1cf8c9fd1410004cbaf58",
    uv: 23.3,
  },
  {
    name: "5ff1d3109fd1410004cbaf5a",
    uv: 23.2,
  },
  {
    name: "5ff1d469b8cb150004cb0df9",
    uv: 23.2,
  },
  {
    name: "5ff1d7edb8cb150004cb0dfb",
    uv: 23.3,
  },
  {
    name: "5ff1db71b8cb150004cb0dfd",
    uv: 23.2,
  },
  {
    name: "5ff1dc657a569b00047a6484",
    uv: 23.2,
  },
  {
    name: "5ff1dfe97a569b00047a6486",
    uv: 23.2,
  },
  {
    name: "5ff1e36d7a569b00047a6488",
    uv: 23.2,
  },
  {
    name: "5ff1e4fb4dd325000425d0f0",
    uv: 23.3,
  },
  {
    name: "5ff1e87f4dd325000425d0f2",
    uv: 23.2,
  },
  {
    name: "5ff1ec034dd325000425d0f4",
    uv: 23.2,
  },
  {
    name: "5ff1ed2e90fc17000473ecf1",
    uv: 23.1,
  },
  {
    name: "5ff1f0b290fc17000473ecf3",
    uv: 23.2,
  },
  {
    name: "5ff1f43690fc17000473ecf5",
    uv: 23.1,
  },
  {
    name: "5ff1f4eb3dfacc0004ffa317",
    uv: 23.1,
  },
  {
    name: "5ff1f86f3dfacc0004ffa319",
    uv: 23,
  },
  {
    name: "5ff1fbf33dfacc0004ffa31b",
    uv: 23.1,
  },
  {
    name: "5ff1ff773dfacc0004ffa31d",
    uv: 23,
  },
  {
    name: "5ff202fb3dfacc0004ffa31f",
    uv: 23.1,
  },
  {
    name: "5ff2067f3dfacc0004ffa321",
    uv: 23.2,
  },
  {
    name: "5ff20a033dfacc0004ffa323",
    uv: 23.1,
  },
  {
    name: "5ff20d873dfacc0004ffa325",
    uv: 23,
  },
  {
    name: "5ff20f0993375a000437961b",
    uv: 23,
  },
  {
    name: "5ff2128c93375a000437961d",
    uv: 23,
  },
  {
    name: "5ff2161093375a000437961f",
    uv: 23,
  },
  {
    name: "5ff217536beafc0004968f02",
    uv: 23,
  },
  {
    name: "5ff21ad76beafc0004968f04",
    uv: 23,
  },
  {
    name: "5ff21e5b6beafc0004968f06",
    uv: 23,
  },
  {
    name: "5ff221df6beafc0004968f08",
    uv: 23,
  },
  {
    name: "5ff225636beafc0004968f0a",
    uv: 23,
  },
  {
    name: "5ff228e76beafc0004968f0c",
    uv: 23,
  },
  {
    name: "5ff22b5fc99902000436d8f8",
    uv: 23,
  },
  {
    name: "5ff22ee3c99902000436d8fa",
    uv: 23,
  },
  {
    name: "5ff23267c99902000436d8fc",
    uv: 22.9,
  },
  {
    name: "5ff233de485478000457bce4",
    uv: 22.8,
  },
  {
    name: "5ff23762485478000457bce6",
    uv: 22.8,
  },
  {
    name: "5ff23ae6485478000457bce8",
    uv: 22.7,
  },
  {
    name: "5ff23bda6b17410004e9deae",
    uv: 22.6,
  },
  {
    name: "5ff23f5e6b17410004e9deb0",
    uv: 22.6,
  },
  {
    name: "5ff242e26b17410004e9deb2",
    uv: 22.6,
  },
  {
    name: "5ff24570553f980004e4f617",
    uv: 22.5,
  },
  {
    name: "5ff248f4553f980004e4f619",
    uv: 22.5,
  },
  {
    name: "5ff24c78553f980004e4f61b",
    uv: 22.5,
  },
  {
    name: "5ff24e0cb1ce68000462e02b",
    uv: 22.5,
  },
  {
    name: "5ff25190b1ce68000462e02d",
    uv: 22.4,
  },
  {
    name: "5ff25514b1ce68000462e02f",
    uv: 22.5,
  },
  {
    name: "5ff2568de3a96e00049b55f2",
    uv: 22.4,
  },
  {
    name: "5ff25a11e3a96e00049b55f4",
    uv: 22.5,
  },
  {
    name: "5ff25d95e3a96e00049b55f6",
    uv: 22.5,
  },
  {
    name: "5ff25f1863f1df00043bcc6d",
    uv: 22.4,
  },
  {
    name: "5ff2629c63f1df00043bcc6f",
    uv: 22.3,
  },
  {
    name: "5ff2662063f1df00043bcc71",
    uv: 22.3,
  },
  {
    name: "5ff267d4d638c90004910b5d",
    uv: 22.4,
  },
  {
    name: "5ff26b58d638c90004910b5f",
    uv: 22.3,
  },
  {
    name: "5ff26edcd638c90004910b61",
    uv: 22.4,
  },
  {
    name: "5ff26fde7bbda60004d88fda",
    uv: 22.3,
  },
  {
    name: "5ff273627bbda60004d88fdc",
    uv: 22.2,
  },
  {
    name: "5ff276e67bbda60004d88fde",
    uv: 22.3,
  },
  {
    name: "5ff277bb072d4e000460429b",
    uv: 22.3,
  },
  {
    name: "5ff27b3f072d4e000460429d",
    uv: 22.3,
  },
  {
    name: "5ff27ec3072d4e000460429f",
    uv: 22.4,
  },
  {
    name: "5ff27fde986b8300046538f4",
    uv: 22.3,
  },
  {
    name: "5ff28362986b8300046538f6",
    uv: 22.3,
  },
  {
    name: "5ff286e6986b8300046538f8",
    uv: 22.4,
  },
  {
    name: "5ff288ad13c2580004a9dd42",
    uv: 22.3,
  },
  {
    name: "5ff28c3113c2580004a9dd44",
    uv: 22.4,
  },
  {
    name: "5ff28fb513c2580004a9dd46",
    uv: 22.4,
  },
  {
    name: "5ff290a3b0b17c0004b46c12",
    uv: 22.2,
  },
  {
    name: "5ff29427b0b17c0004b46c14",
    uv: 22.3,
  },
  {
    name: "5ff297abb0b17c0004b46c16",
    uv: 22.6,
  },
  {
    name: "5ff299ad96b46300046df2fc",
    uv: 22.5,
  },
  {
    name: "5ff29d3196b46300046df2fe",
    uv: 22.4,
  },
  {
    name: "5ff2a0b596b46300046df300",
    uv: 22.4,
  },
  {
    name: "5ff2a183a78d0200040510cd",
    uv: 22.4,
  },
  {
    name: "5ff2a507a78d0200040510cf",
    uv: 22.4,
  },
  {
    name: "5ff2a88ba78d0200040510d1",
    uv: 22.5,
  },
  {
    name: "5ff2a9cb71d4040004faa1ea",
    uv: 22.5,
  },
  {
    name: "5ff2ad4e71d4040004faa1ec",
    uv: 22.5,
  },
  {
    name: "5ff2b0d271d4040004faa1ee",
    uv: 22.5,
  },
  {
    name: "5ff2b1da52801f0004955044",
    uv: 22.6,
  },
  {
    name: "5ff582ee8cbccf00040a17e3",
    uv: 21.7,
  },
  {
    name: "5ff584478cbccf00040a17e5",
    uv: 22.1,
  },
  {
    name: "5ff58be88cbccf00040a17e7",
    uv: 22.5,
  },
  {
    name: "5ff59488a38c1400046505d5",
    uv: 23.2,
  },
  {
    name: "5ff5980ca38c1400046505d7",
    uv: 23.1,
  },
  {
    name: "5ff59b90a38c1400046505d9",
    uv: 23.2,
  },
  {
    name: "5ff59f14a38c1400046505db",
    uv: 23.1,
  },
  {
    name: "5ff5a298a38c1400046505dd",
    uv: 23.1,
  },
  {
    name: "5ff5a61ca38c1400046505df",
    uv: 23,
  },
  {
    name: "5ff5a719c2c41e0004d799a5",
    uv: 23,
  },
  {
    name: "5ff5aa9cc2c41e0004d799a7",
    uv: 23,
  },
  {
    name: "5ff5ae20c2c41e0004d799a9",
    uv: 23,
  },
  {
    name: "5ff5af33c3d2f800046e6d23",
    uv: 22.9,
  },
  {
    name: "5ff5b2b7c3d2f800046e6d25",
    uv: 22.8,
  },
  {
    name: "5ff5b63bc3d2f800046e6d27",
    uv: 22.9,
  },
  {
    name: "5ff5b9bfc3d2f800046e6d29",
    uv: 22.9,
  },
  {
    name: "5ff5bd43c3d2f800046e6d2b",
    uv: 22.9,
  },
  {
    name: "5ff5be9b17502e0004ad460e",
    uv: 22.9,
  },
  {
    name: "5ff5c21f17502e0004ad4610",
    uv: 22.8,
  },
  {
    name: "5ff5c5a317502e0004ad4612",
    uv: 22.8,
  },
  {
    name: "5ff5c6d11855060004cf4ec5",
    uv: 22.7,
  },
  {
    name: "5ff5ca551855060004cf4ec7",
    uv: 22.6,
  },
  {
    name: "5ff5cdd91855060004cf4ec9",
    uv: 22.7,
  },
  {
    name: "5ff5cf5b1fa050000477ed21",
    uv: 22.7,
  },
  {
    name: "5ff5d2df1fa050000477ed23",
    uv: 22.7,
  },
  {
    name: "5ff5d6631fa050000477ed25",
    uv: 22.7,
  },
  {
    name: "5ff5d7d31609a300046e31fc",
    uv: 22.9,
  },
  {
    name: "5ff5db571609a300046e31fe",
    uv: 22.9,
  },
  {
    name: "5ff5dedb1609a300046e3200",
    uv: 22.8,
  },
  {
    name: "5ff5e25f1609a300046e3202",
    uv: 22.7,
  },
  {
    name: "5ff5e5e41609a300046e3204",
    uv: 22.7,
  },
  {
    name: "5ff5e6b3cd38ba000425e5fa",
    uv: 22.7,
  },
  {
    name: "5ff5ea37cd38ba000425e5fc",
    uv: 22.6,
  },
  {
    name: "5ff5edbbcd38ba000425e5fe",
    uv: 22.6,
  },
  {
    name: "5ff5eee5fdde91000485e78b",
    uv: 22.5,
  },
  {
    name: "5ff5f269fdde91000485e78d",
    uv: 22.5,
  },
  {
    name: "5ff5f5edfdde91000485e78f",
    uv: 22.5,
  },
  {
    name: "5ff5f971fdde91000485e791",
    uv: 22.6,
  },
  {
    name: "5ff5fa176d945c00041c4b3f",
    uv: 22.5,
  },
  {
    name: "5ff5fb6b3ec7b00004a44a2c",
    uv: 22.7,
  },
  {
    name: "5ff5feef3ec7b00004a44a2e",
    uv: 22.5,
  },
  {
    name: "5ff5ff79c2dcf7000434908d",
    uv: 22.5,
  },
  {
    name: "5ff602fdc2dcf7000434908f",
    uv: 22.5,
  },
  {
    name: "5ff60629eb086c000480af16",
    uv: 22.4,
  },
  {
    name: "5ff6072a26efcd0004972269",
    uv: 22.4,
  },
  {
    name: "5ff60aae26efcd000497226b",
    uv: 22.3,
  },
  {
    name: "5ff60e3226efcd000497226d",
    uv: 22.4,
  },
  {
    name: "5ff6119b22c91c00047bc76c",
    uv: 22.3,
  },
  {
    name: "5ff6151f22c91c00047bc76e",
    uv: 22.3,
  },
  {
    name: "5ff618a322c91c00047bc770",
    uv: 22.4,
  },
  {
    name: "5ff61a20667c3f0004aa0663",
    uv: 22.5,
  },
  {
    name: "5ff61da4667c3f0004aa0665",
    uv: 22.6,
  },
  {
    name: "5ff62128667c3f0004aa0667",
    uv: 22.5,
  },
  {
    name: "5ff6221b59af8d00048341fa",
    uv: 22.3,
  },
  {
    name: "5ff6259f59af8d00048341fc",
    uv: 22.3,
  },
  {
    name: "5ff6269afa173000044177a6",
    uv: 22.3,
  },
  {
    name: "5ff6277dc0b692000410d102",
    uv: 22.2,
  },
  {
    name: "5ff6296758997d00042cc149",
    uv: 22.3,
  },
  {
    name: "5ff62bb17113c00004c4f6ee",
    uv: 22.1,
  },
  {
    name: "5ff62ccf15d2d90004ed90db",
    uv: 22.1,
  },
  {
    name: "5ff62f0633f4d30004d17859",
    uv: 22.1,
  },
  {
    name: "5ff6304df73df000040b2c3c",
    uv: 22.1,
  },
  {
    name: "5ff63105355eb50004565460",
    uv: 22.2,
  },
  {
    name: "5ff6333748a79100041e8031",
    uv: 22.1,
  },
  {
    name: "5ff6348b2020df00041a81a9",
    uv: 22.1,
  },
  {
    name: "5ff6380f2020df00041a81ab",
    uv: 22.1,
  },
  {
    name: "5ff63b932020df00041a81ad",
    uv: 22,
  },
  {
    name: "5ff63e9d236f2b00046854c4",
    uv: 22.1,
  },
  {
    name: "5ff64221236f2b00046854c6",
    uv: 22.1,
  },
  {
    name: "5ff645a5236f2b00046854c8",
    uv: 22.1,
  },
  {
    name: "5ff6478763c55200042a9a42",
    uv: 22,
  },
  {
    name: "5ff64b0a63c55200042a9a44",
    uv: 22.1,
  },
  {
    name: "5ff64e8e63c55200042a9a46",
    uv: 22.1,
  },
  {
    name: "5ff64f81a6f6e50004ddf094",
    uv: 22,
  },
  {
    name: "5ff64fc689347c0004874d60",
    uv: 22,
  },
  {
    name: "5ff6534a89347c0004874d62",
    uv: 22.1,
  },
  {
    name: "5ff656ce89347c0004874d64",
    uv: 22.1,
  },
  {
    name: "5ff65a514d342d00043dc810",
    uv: 22.1,
  },
  {
    name: "5ff65dd54d342d00043dc812",
    uv: 22.2,
  },
  {
    name: "5ff65fa5341de90004460f83",
    uv: 22.3,
  },
  {
    name: "5ff66329341de90004460f85",
    uv: 22.2,
  },
  {
    name: "5ff666ad341de90004460f87",
    uv: 22.2,
  },
  {
    name: "5ff66743b05b7500048613ef",
    uv: 22.2,
  },
  {
    name: "5ff66ac7b05b7500048613f1",
    uv: 22.2,
  },
  {
    name: "5ff66afab5bd120004f46f02",
    uv: 22.2,
  },
  {
    name: "5ff66ca40463810004a29a0e",
    uv: 22.2,
  },
  {
    name: "5ff66de09daa2b000416c1c2",
    uv: 22.2,
  },
  {
    name: "5ff67042ca2eeb0004373834",
    uv: 22.3,
  },
  {
    name: "5ff673c6ca2eeb0004373836",
    uv: 22.4,
  },
  {
    name: "5ff67649cc404000041ad956",
    uv: 22.4,
  },
  {
    name: "5ff679cdcc404000041ad958",
    uv: 22.4,
  },
  {
    name: "5ff67d51cc404000041ad95a",
    uv: 22.4,
  },
  {
    name: "5ff67e61f17db80004579ef4",
    uv: 22.5,
  },
  {
    name: "5ff681e5f17db80004579ef6",
    uv: 22.4,
  },
  {
    name: "5ff684c11e8b7b000464166e",
    uv: 22.4,
  },
  {
    name: "5ff687eca3f94c0004f99962",
    uv: 22.5,
  },
  {
    name: "5ff689273c0d9f000450a637",
    uv: 22.7,
  },
  {
    name: "5ff68adad1325d000420a036",
    uv: 22.8,
  },
  {
    name: "5ff68e5ed1325d000420a038",
    uv: 22.7,
  },
  {
    name: "5ff691e2d1325d000420a03a",
    uv: 22.5,
  },
  {
    name: "5ff692c8b556d1000428bd89",
    uv: 22.6,
  },
  {
    name: "5ff6964cb556d1000428bd8b",
    uv: 22.6,
  },
  {
    name: "5ff699d0b556d1000428bd8d",
    uv: 22.5,
  },
  {
    name: "5ff69d54b556d1000428bd8f",
    uv: 22.5,
  },
  {
    name: "5ff6a0d8b556d1000428bd91",
    uv: 22.5,
  },
  {
    name: "5ff6a194ff429700044f45b5",
    uv: 22.5,
  },
  {
    name: "5ff6a518ff429700044f45b7",
    uv: 22.5,
  },
  {
    name: "5ff6a89cff429700044f45b9",
    uv: 22.5,
  },
  {
    name: "5ff6aa0437ae080004fb59c2",
    uv: 22.7,
  },
  {
    name: "5ff6ad8837ae080004fb59c4",
    uv: 22.7,
  },
  {
    name: "5ff6b10c37ae080004fb59c6",
    uv: 22.6,
  },
  {
    name: "5ff6b228e2f94b000493abaf",
    uv: 22.7,
  },
  {
    name: "5ff6b5ace2f94b000493abb1",
    uv: 22.7,
  },
  {
    name: "5ff6b930e2f94b000493abb3",
    uv: 22.6,
  },
  {
    name: "5ff6ba417ff606000490e138",
    uv: 22.8,
  },
  {
    name: "5ff6bbb93f46c70004634664",
    uv: 22.7,
  },
  {
    name: "5ff6bd0793728f00047e4410",
    uv: 22.7,
  },
  {
    name: "5ff6bdfeffc6550004241b5e",
    uv: 22.8,
  },
  {
    name: "5ff6be620954180004df5a52",
    uv: 22.8,
  },
  {
    name: "5ff6c1e60954180004df5a54",
    uv: 22.7,
  },
  {
    name: "5ff6c56a0954180004df5a56",
    uv: 22.8,
  },
  {
    name: "5ff6c59d0fc8350004d7d1b3",
    uv: 22.9,
  },
  {
    name: "5ff6c9210fc8350004d7d1b5",
    uv: 22.9,
  },
  {
    name: "5ff6cca60fc8350004d7d1b7",
    uv: 23,
  },
  {
    name: "5ff6d0290fc8350004d7d1b9",
    uv: 23.1,
  },
  {
    name: "5ff6d3ad0fc8350004d7d1bb",
    uv: 23,
  },
  {
    name: "5ff6d7310fc8350004d7d1bd",
    uv: 23.1,
  },
  {
    name: "5ff6d9f3439fce0004800841",
    uv: 23.1,
  },
  {
    name: "5ff6dd77439fce0004800843",
    uv: 23.1,
  },
  {
    name: "5ff6e0fb439fce0004800845",
    uv: 23.2,
  },
  {
    name: "5ff6e243f811600004563953",
    uv: 23.2,
  },
  {
    name: "5ff6e5c7f811600004563955",
    uv: 23.2,
  },
  {
    name: "5ff6e94bf811600004563957",
    uv: 23.4,
  },
  {
    name: "5ff6ea84dc62620004afd1ea",
    uv: 23.5,
  },
  {
    name: "5ff6ee08dc62620004afd1ec",
    uv: 23.7,
  },
  {
    name: "5ff6f18cdc62620004afd1ee",
    uv: 23.6,
  },
  {
    name: "5ff6f25b8657f4000404e814",
    uv: 23.5,
  },
  {
    name: "5ff6f5df8657f4000404e816",
    uv: 23.5,
  },
  {
    name: "5ff6f9638657f4000404e818",
    uv: 23.5,
  },
  {
    name: "5ff6fa7264081e000458630f",
    uv: 23.5,
  },
  {
    name: "5ff6fdf664081e0004586311",
    uv: 23.5,
  },
  {
    name: "5ff7017a64081e0004586313",
    uv: 23.4,
  },
  {
    name: "5ff702899d269300042c948d",
    uv: 23.4,
  },
  {
    name: "5ff7060d9d269300042c948f",
    uv: 23.4,
  },
  {
    name: "5ff709919d269300042c9491",
    uv: 23.3,
  },
  {
    name: "5ff70b1747f8c20004231475",
    uv: 23.6,
  },
  {
    name: "5ff70e9b47f8c20004231477",
    uv: 23.5,
  },
  {
    name: "5ff7121f47f8c20004231479",
    uv: 23.5,
  },
  {
    name: "5ff715a347f8c2000423147b",
    uv: 23.5,
  },
  {
    name: "5ff7192747f8c2000423147d",
    uv: 23.4,
  },
  {
    name: "5ff71bc1bb8b240004c5c8eb",
    uv: 23.3,
  },
  {
    name: "5ff71f45bb8b240004c5c8ed",
    uv: 23.4,
  },
  {
    name: "5ff720244b533e00045b98f7",
    uv: 23.3,
  },
  {
    name: "5ff7230173f9280004cf84d5",
    uv: 23.4,
  },
  {
    name: "5ff7268573f9280004cf84d7",
    uv: 23.4,
  },
  {
    name: "5ff726ef2e988c0004db3fa5",
    uv: 23.5,
  },
  {
    name: "5ff72a732e988c0004db3fa7",
    uv: 23.4,
  },
  {
    name: "5ff72cc8b819fb00044dacea",
    uv: 23.5,
  },
  {
    name: "5ff72f7dc87e360004d3c89e",
    uv: 23.3,
  },
  {
    name: "5ff72ff02c481300044ae9f3",
    uv: 23.4,
  },
  {
    name: "5ff732b8f9ccdd000433023c",
    uv: 23.4,
  },
  {
    name: "5ff7347ad0dfa3000484e728",
    uv: 23.4,
  },
  {
    name: "5ff737fed0dfa3000484e72a",
    uv: 23.4,
  },
  {
    name: "5ff73b82d0dfa3000484e72c",
    uv: 23.3,
  },
  {
    name: "5ff73ce409e2260004dd4d4e",
    uv: 23.4,
  },
  {
    name: "5ff73ea3c6de7600040ea509",
    uv: 23.3,
  },
  {
    name: "5ff73efbfbaf120004c38225",
    uv: 23.3,
  },
  {
    name: "5ff7427ffbaf120004c38227",
    uv: 23.3,
  },
  {
    name: "5ff745b5fbaf120004c38229",
    uv: 23.2,
  },
  {
    name: "5ff748a0e9753a0004f9f397",
    uv: 23.3,
  },
  {
    name: "5ff74b20ce192f00047a00a0",
    uv: 23.5,
  },
  {
    name: "5ff74c9c5540b30004ef6660",
    uv: 23.4,
  },
  {
    name: "5ff74f851da3520004f6cb44",
    uv: 23.4,
  },
  {
    name: "5ff753091da3520004f6cb46",
    uv: 23.3,
  },
  {
    name: "5ff7568d1da3520004f6cb48",
    uv: 23.3,
  },
  {
    name: "5ff758c87519090004cbfed6",
    uv: 23.2,
  },
  {
    name: "5ff75c4c7519090004cbfed8",
    uv: 23.2,
  },
  {
    name: "5ff75f191a69ce00040798b8",
    uv: 23.1,
  },
  {
    name: "5ff7629d1a69ce00040798ba",
    uv: 23.2,
  },
  {
    name: "5ff763caa09f720004756c0e",
    uv: 23.3,
  },
  {
    name: "5ff765318d82a1000478eab4",
    uv: 23.2,
  },
  {
    name: "5ff766f6cb3dce000414c0d0",
    uv: 23.2,
  },
  {
    name: "5ff7686330fcce0004686ab8",
    uv: 23.3,
  },
  {
    name: "5ff76b140e8e110004b3ee08",
    uv: 23.4,
  },
  {
    name: "5ff76e91b5841900047c6a48",
    uv: 23.4,
  },
  {
    name: "5ff770279979de00041f3606",
    uv: 23.4,
  },
  {
    name: "5ff773aa9979de00041f3608",
    uv: 23.3,
  },
  {
    name: "5ff7772f9979de00041f360a",
    uv: 23.2,
  },
  {
    name: "5ff779e8be48770004a958d3",
    uv: 23.2,
  },
  {
    name: "5ff77d6cbe48770004a958d5",
    uv: 23.1,
  },
  {
    name: "5ff780f0be48770004a958d7",
    uv: 23.1,
  },
  {
    name: "5ff78104be48770004a958d9",
    uv: 23,
  },
  {
    name: "5ff78488be48770004a958db",
    uv: 23.1,
  },
  {
    name: "5ff7880cbe48770004a958dd",
    uv: 23.1,
  },
  {
    name: "5ff789a27861a400041793b1",
    uv: 23,
  },
  {
    name: "5ff78d267861a400041793b3",
    uv: 23.1,
  },
  {
    name: "5ff790aa7861a400041793b5",
    uv: 23,
  },
  {
    name: "5ff7942e7861a400041793b7",
    uv: 23,
  },
  {
    name: "5ff79554e3b4b700044023eb",
    uv: 23,
  },
  {
    name: "5ff795f03eb8ea00046a771c",
    uv: 23,
  },
  {
    name: "5ff799743eb8ea00046a771e",
    uv: 23,
  },
  {
    name: "5ff79a1a3d4b2c0004440084",
    uv: 23,
  },
  {
    name: "5ff79d9e3d4b2c0004440086",
    uv: 23.1,
  },
  {
    name: "5ff79e7affb50a0004c90e98",
    uv: 23.1,
  },
  {
    name: "5ff7a1feffb50a0004c90e9a",
    uv: 23,
  },
  {
    name: "5ff7a40b51142a0004fac24e",
    uv: 23,
  },
  {
    name: "5ff7a78f51142a0004fac250",
    uv: 23,
  },
  {
    name: "5ff7ab1351142a0004fac252",
    uv: 23,
  },
  {
    name: "5ff7ae777ecf570004d11d9b",
    uv: 23,
  },
  {
    name: "5ff7b1fb7ecf570004d11d9d",
    uv: 23,
  },
  {
    name: "5ff7b57f7ecf570004d11d9f",
    uv: 23,
  },
  {
    name: "5ff7b6691785b700045fbe69",
    uv: 23.1,
  },
  {
    name: "5ff7b9ed1785b700045fbe6b",
    uv: 23.1,
  },
  {
    name: "5ff7bd711785b700045fbe6d",
    uv: 23,
  },
  {
    name: "5ff7be975561db00046b49fd",
    uv: 23,
  },
  {
    name: "5ff7c21b5561db00046b49ff",
    uv: 23.1,
  },
  {
    name: "5ff7c59f5561db00046b4a01",
    uv: 23,
  },
  {
    name: "5ff7c71024b9d000041492cf",
    uv: 23.1,
  },
  {
    name: "5ff7ca9424b9d000041492d1",
    uv: 23,
  },
  {
    name: "5ff7ce1824b9d000041492d3",
    uv: 23.1,
  },
  {
    name: "5ff7d1aa8de2d000041d0f48",
    uv: 23,
  },
  {
    name: "5ff7d52e8de2d000041d0f4a",
    uv: 23,
  },
  {
    name: "5ff7d72a3941b9000484eb87",
    uv: 23,
  },
  {
    name: "5ff7daae3941b9000484eb89",
    uv: 23.1,
  },
  {
    name: "5ff7de323941b9000484eb8b",
    uv: 23.2,
  },
  {
    name: "5ff7df54a09df60004e6a80b",
    uv: 23.1,
  },
  {
    name: "5ff7e2d8a09df60004e6a80d",
    uv: 23.1,
  },
  {
    name: "5ff7e65ca09df60004e6a80f",
    uv: 23,
  },
  {
    name: "5ff7e77580b7740004f368b3",
    uv: 22.9,
  },
  {
    name: "5ff7eaf980b7740004f368b5",
    uv: 22.9,
  },
  {
    name: "5ff7ee7d80b7740004f368b7",
    uv: 22.8,
  },
  {
    name: "5ff7efbf61de090004ecdd2e",
    uv: 22.7,
  },
  {
    name: "5ff7f34361de090004ecdd30",
    uv: 22.7,
  },
  {
    name: "5ff7f6c761de090004ecdd32",
    uv: 22.6,
  },
  {
    name: "5ff7f806c26d520004715992",
    uv: 22.7,
  },
  {
    name: "5ff7fb8ac26d520004715994",
    uv: 22.8,
  },
  {
    name: "5ff7ff0ec26d520004715996",
    uv: 22.8,
  },
  {
    name: "5ff80035188e4500040ec8fe",
    uv: 22.5,
  },
  {
    name: "5ff803b9188e4500040ec900",
    uv: 22.6,
  },
  {
    name: "5ff8073d188e4500040ec902",
    uv: 22.5,
  },
  {
    name: "5ff80817bf3c7600047b6841",
    uv: 22.5,
  },
  {
    name: "5ff80b9bbf3c7600047b6843",
    uv: 22.5,
  },
  {
    name: "5ff80f1fbf3c7600047b6845",
    uv: 22.5,
  },
  {
    name: "5ff80ffa02d5b90004446218",
    uv: 22.4,
  },
  {
    name: "5ff8137e02d5b9000444621a",
    uv: 22.5,
  },
  {
    name: "5ff8170202d5b9000444621c",
    uv: 22.5,
  },
  {
    name: "5ff81805b7a95e0004cd5a8c",
    uv: 22.7,
  },
  {
    name: "5ff81b89b7a95e0004cd5a8e",
    uv: 22.6,
  },
  {
    name: "5ff81f0db7a95e0004cd5a90",
    uv: 22.8,
  },
  {
    name: "5ff81ffaedee4d00046ecc38",
    uv: 22.7,
  },
  {
    name: "5ff8237eedee4d00046ecc3a",
    uv: 22.8,
  },
  {
    name: "5ff82702edee4d00046ecc3c",
    uv: 22.7,
  },
  {
    name: "5ff827cf7289870004489361",
    uv: 22.7,
  },
  {
    name: "5ff82b537289870004489363",
    uv: 22.8,
  },
  {
    name: "5ff82ed77289870004489365",
    uv: 22.7,
  },
  {
    name: "5ff82fd3bf19d10004b6041b",
    uv: 22.9,
  },
  {
    name: "5ff83357bf19d10004b6041d",
    uv: 22.8,
  },
  {
    name: "5ff836dbbf19d10004b6041f",
    uv: 22.8,
  },
  {
    name: "5ff83814f5dc5a000485ecdd",
    uv: 22.8,
  },
  {
    name: "5ff83b98f5dc5a000485ecdf",
    uv: 23,
  },
  {
    name: "5ff83f1cf5dc5a000485ece1",
    uv: 23,
  },
  {
    name: "5ff8404572bbdc0004b81008",
    uv: 22.9,
  },
  {
    name: "5ff843c972bbdc0004b8100a",
    uv: 23,
  },
  {
    name: "5ff8474d72bbdc0004b8100c",
    uv: 23,
  },
  {
    name: "5ff84847c3901b000465fa26",
    uv: 22.9,
  },
  {
    name: "5ff84bcbc3901b000465fa28",
    uv: 23,
  },
  {
    name: "5ff84f4fc3901b000465fa2a",
    uv: 23,
  },
  {
    name: "5ff8515a9d7ee90004227ec6",
    uv: 23,
  },
  {
    name: "5ff854de9d7ee90004227ec8",
    uv: 23,
  },
  {
    name: "5ff858629d7ee90004227eca",
    uv: 23,
  },
  {
    name: "5ff85be69d7ee90004227ecc",
    uv: 23,
  },
  {
    name: "5ff85f6a9d7ee90004227ece",
    uv: 23,
  },
  {
    name: "5ff86023cda1900004c4ec37",
    uv: 23,
  },
  {
    name: "5ff863a7cda1900004c4ec39",
    uv: 23,
  },
  {
    name: "5ff8672bcda1900004c4ec3b",
    uv: 22.9,
  },
  {
    name: "5ff8684118fc1000040c065d",
    uv: 22.9,
  },
  {
    name: "5ff86bc518fc1000040c065f",
    uv: 22.9,
  },
  {
    name: "5ff86f4918fc1000040c0661",
    uv: 22.9,
  },
  {
    name: "5ff87059e337ee00045cdb98",
    uv: 22.9,
  },
  {
    name: "5ff873dde337ee00045cdb9a",
    uv: 22.8,
  },
  {
    name: "5ff87761e337ee00045cdb9c",
    uv: 22.8,
  },
  {
    name: "5ff8780cac56980004357c60",
    uv: 22.9,
  },
  {
    name: "5ff87b90ac56980004357c62",
    uv: 22.9,
  },
  {
    name: "5ff87f14ac56980004357c64",
    uv: 22.9,
  },
  {
    name: "5ff87feeae86c2000422dc20",
    uv: 22.9,
  },
  {
    name: "5ff88372ae86c2000422dc22",
    uv: 22.9,
  },
  {
    name: "5ff886f6ae86c2000422dc24",
    uv: 22.7,
  },
  {
    name: "5ff8881092a87d0004306f14",
    uv: 22.7,
  },
  {
    name: "5ff88b9492a87d0004306f16",
    uv: 22.7,
  },
  {
    name: "5ff88f1892a87d0004306f18",
    uv: 22.7,
  },
  {
    name: "5ff89007f097b0000445052f",
    uv: 22.7,
  },
  {
    name: "5ff8938bf097b00004450531",
    uv: 22.7,
  },
  {
    name: "5ff8970ff097b00004450533",
    uv: 22.7,
  },
  {
    name: "5ff89a372d0a0e000494942c",
    uv: 22.7,
  },
  {
    name: "5ff89dbb2d0a0e000494942e",
    uv: 22.9,
  },
  {
    name: "5ff89ec74b46da00040a131d",
    uv: 22.7,
  },
  {
    name: "5ff8a24b4b46da00040a131f",
    uv: 22.7,
  },
  {
    name: "5ff8a5cf4b46da00040a1321",
    uv: 22.7,
  },
  {
    name: "5ff8a6a2e455fa00043ac550",
    uv: 22.6,
  },
  {
    name: "5ff8aa26e455fa00043ac552",
    uv: 22.7,
  },
  {
    name: "5ff8adaae455fa00043ac554",
    uv: 22.7,
  },
  {
    name: "5ff8aec21d25990004cb0fe5",
    uv: 22.6,
  },
  {
    name: "5ff8b2461d25990004cb0fe7",
    uv: 22.6,
  },
  {
    name: "5ff8b5ca1d25990004cb0fe9",
    uv: 22.6,
  },
  {
    name: "5ff8b792eebee10004eb723c",
    uv: 22.7,
  },
  {
    name: "5ff8bb16eebee10004eb723e",
    uv: 22.6,
  },
  {
    name: "5ff8be9aeebee10004eb7240",
    uv: 22.9,
  },
  {
    name: "5ff8c21eeebee10004eb7242",
    uv: 22.9,
  },
  {
    name: "5ff8c5a2eebee10004eb7244",
    uv: 22.8,
  },
  {
    name: "5ff8c6c0315d470004e50ade",
    uv: 22.5,
  },
  {
    name: "5ff8ca44315d470004e50ae0",
    uv: 22.6,
  },
  {
    name: "5ff8cdc8315d470004e50ae2",
    uv: 22.5,
  },
  {
    name: "5ff8ce8b5d94820004cbc3f5",
    uv: 22.4,
  },
  {
    name: "5ff8d20f5d94820004cbc3f7",
    uv: 22.5,
  },
  {
    name: "5ff8d5935d94820004cbc3f9",
    uv: 22.5,
  },
  {
    name: "5ff8d6a658f7f900043c8370",
    uv: 22.5,
  },
  {
    name: "5ff8da2a58f7f900043c8372",
    uv: 22.5,
  },
  {
    name: "5ff8ddae58f7f900043c8374",
    uv: 22.5,
  },
  {
    name: "5ff8e040c62a360004f31fdd",
    uv: 22.4,
  },
  {
    name: "5ff8e3c4c62a360004f31fdf",
    uv: 22.4,
  },
  {
    name: "5ff8e748c62a360004f31fe1",
    uv: 22.4,
  },
  {
    name: "5ff8eaccc62a360004f31fe3",
    uv: 22.5,
  },
  {
    name: "5ff8ed4c8a9c4c0004dd670f",
    uv: 22.4,
  },
  {
    name: "5ff8f0d08a9c4c0004dd6711",
    uv: 22.5,
  },
  {
    name: "5ff8f4548a9c4c0004dd6713",
    uv: 22.5,
  },
  {
    name: "5ff8f5792e4156000411d665",
    uv: 22.5,
  },
  {
    name: "5ff8f8fd2e4156000411d667",
    uv: 22.5,
  },
  {
    name: "5ff8fc812e4156000411d669",
    uv: 22.5,
  },
  {
    name: "5ff8fdf8b4bd170004a7698a",
    uv: 22.6,
  },
  {
    name: "5ff9017cb4bd170004a7698c",
    uv: 22.5,
  },
  {
    name: "5ff90500b4bd170004a7698e",
    uv: 22.6,
  },
  {
    name: "5ff906ea5c9f500004404bc2",
    uv: 22.6,
  },
  {
    name: "5ff90a6e5c9f500004404bc4",
    uv: 22.6,
  },
  {
    name: "5ff90df25c9f500004404bc6",
    uv: 22.6,
  },
  {
    name: "5ff90eed44eda9000472dd49",
    uv: 22.7,
  },
  {
    name: "5ff9127144eda9000472dd4b",
    uv: 22.6,
  },
  {
    name: "5ff915f544eda9000472dd4d",
    uv: 22.8,
  },
  {
    name: "5ff9173ed2b3d80004a9e941",
    uv: 22.8,
  },
  {
    name: "5ff91ac2d2b3d80004a9e943",
    uv: 22.8,
  },
  {
    name: "5ff91e46d2b3d80004a9e945",
    uv: 22.8,
  },
  {
    name: "5ff91f87de364c00049c3dec",
    uv: 22.7,
  },
  {
    name: "5ff9230bde364c00049c3dee",
    uv: 22.7,
  },
  {
    name: "5ff9268fde364c00049c3df0",
    uv: 22.8,
  },
  {
    name: "5ff928088bc9060004ffe738",
    uv: 22.8,
  },
  {
    name: "5ff92b8c8bc9060004ffe73a",
    uv: 22.9,
  },
  {
    name: "5ff92f108bc9060004ffe73c",
    uv: 23,
  },
  {
    name: "5ff93046b31f7e000477227c",
    uv: 23.1,
  },
  {
    name: "5ff933cab31f7e000477227e",
    uv: 23,
  },
  {
    name: "5ff9374eb31f7e0004772280",
    uv: 22.9,
  },
  {
    name: "5ff938c52bc0520004c680ae",
    uv: 22.9,
  },
  {
    name: "5ff93c492bc0520004c680b0",
    uv: 22.9,
  },
  {
    name: "5ff93fcd2bc0520004c680b2",
    uv: 22.9,
  },
  {
    name: "5ff94145b87bb7000446740f",
    uv: 22.9,
  },
  {
    name: "5ff944c9b87bb70004467411",
    uv: 22.9,
  },
  {
    name: "5ff9484db87bb70004467413",
    uv: 22.9,
  },
  {
    name: "5ff94915eb329f00042eb947",
    uv: 23,
  },
  {
    name: "5ff94c99eb329f00042eb949",
    uv: 23,
  },
  {
    name: "5ff9501deb329f00042eb94b",
    uv: 23.1,
  },
  {
    name: "5ff95174c6e21200042ade08",
    uv: 23.1,
  },
  {
    name: "5ff954f8c6e21200042ade0a",
    uv: 23,
  },
  {
    name: "5ff9587cc6e21200042ade0c",
    uv: 23.1,
  },
  {
    name: "5ff959c972c8170004bb6836",
    uv: 23,
  },
  {
    name: "5ff95d4d72c8170004bb6838",
    uv: 23,
  },
  {
    name: "5ff960d172c8170004bb683a",
    uv: 23.1,
  },
  {
    name: "5ff961bf37ee990004760b0f",
    uv: 23.1,
  },
  {
    name: "5ff9654337ee990004760b11",
    uv: 23.2,
  },
  {
    name: "5ff968c737ee990004760b13",
    uv: 23.1,
  },
  {
    name: "5ff96955ff4b340004fad084",
    uv: 23.2,
  },
  {
    name: "5ff96cd9ff4b340004fad086",
    uv: 23.3,
  },
  {
    name: "5ff9705dff4b340004fad088",
    uv: 23.4,
  },
  {
    name: "5ff97180e094980004addc86",
    uv: 23.3,
  },
  {
    name: "5ff97504e094980004addc88",
    uv: 23.3,
  },
  {
    name: "5ff97888e094980004addc8a",
    uv: 23.3,
  },
  {
    name: "5ff979d4ec31680004517767",
    uv: 23.3,
  },
  {
    name: "5ff97d58ec31680004517769",
    uv: 23.2,
  },
  {
    name: "5ff980dcec3168000451776b",
    uv: 23.3,
  },
  {
    name: "5ff9815e4d46bb0004aea566",
    uv: 23.2,
  },
  {
    name: "5ff984e24d46bb0004aea568",
    uv: 23.2,
  },
  {
    name: "5ff988664d46bb0004aea56a",
    uv: 23.2,
  },
  {
    name: "5ff98965266121000453d62e",
    uv: 23.4,
  },
  {
    name: "5ff98ce9266121000453d630",
    uv: 23.3,
  },
  {
    name: "5ff9906d266121000453d632",
    uv: 23.5,
  },
  {
    name: "5ff991c741c14c0004ee4cf3",
    uv: 23.2,
  },
  {
    name: "5ff9954b41c14c0004ee4cf5",
    uv: 23.3,
  },
  {
    name: "5ff998cf41c14c0004ee4cf7",
    uv: 23.2,
  },
  {
    name: "5ff999c51a0ea200041bbe3c",
    uv: 23.2,
  },
  {
    name: "5ff99d491a0ea200041bbe3e",
    uv: 23.2,
  },
  {
    name: "5ff9a0cd1a0ea200041bbe40",
    uv: 23.1,
  },
  {
    name: "5ff9a1ebf210e40004ab6ba3",
    uv: 23.1,
  },
  {
    name: "5ff9a56ff210e40004ab6ba5",
    uv: 23.1,
  },
  {
    name: "5ff9a8f3f210e40004ab6ba7",
    uv: 22.9,
  },
  {
    name: "5ff9aa46b5c69700049d3d48",
    uv: 23,
  },
  {
    name: "5ff9aaefe30c5b00040c0908",
    uv: 23.1,
  },
  {
    name: "5ff9acb3c062a40004010d98",
    uv: 23,
  },
  {
    name: "5ff9b04b83e8a900043d2a84",
    uv: 23,
  },
  {
    name: "5ff9b2f636c9ea000412980c",
    uv: 22.8,
  },
  {
    name: "5ff9b67a36c9ea000412980e",
    uv: 22.6,
  },
  {
    name: "5ff9b9fe36c9ea0004129810",
    uv: 22.5,
  },
  {
    name: "5ff9bb358ee85800042e8332",
    uv: 22.3,
  },
  {
    name: "5ff9beb98ee85800042e8334",
    uv: 22.4,
  },
  {
    name: "5ff9bf17bd29400004633df4",
    uv: 22.3,
  },
  {
    name: "5ff9c29bbd29400004633df6",
    uv: 22.2,
  },
  {
    name: "5ff9c61fbd29400004633df8",
    uv: 22.1,
  },
  {
    name: "5ff9c9a3bd29400004633dfa",
    uv: 22.1,
  },
  {
    name: "5ff9ca325f4faf00044b2795",
    uv: 22.1,
  },
  {
    name: "5ff9cdb65f4faf00044b2797",
    uv: 22.1,
  },
  {
    name: "5ff9d13a5f4faf00044b2799",
    uv: 22,
  },
  {
    name: "5ff9d4be5f4faf00044b279b",
    uv: 22,
  },
  {
    name: "5ff9d8425f4faf00044b279d",
    uv: 21.8,
  },
  {
    name: "5ff9db7577ac02000473d13c",
    uv: 21.7,
  },
  {
    name: "5ff9def977ac02000473d13e",
    uv: 21.7,
  },
  {
    name: "5ff9e27d77ac02000473d140",
    uv: 21.5,
  },
  {
    name: "5ff9e408c226a60004926b9f",
    uv: 21.6,
  },
  {
    name: "5ff9e78cc226a60004926ba1",
    uv: 21.6,
  },
  {
    name: "5ff9eb10c226a60004926ba3",
    uv: 21.6,
  },
  {
    name: "5ff9ee94c226a60004926ba5",
    uv: 21.7,
  },
  {
    name: "5ff9ef051c0512000449803c",
    uv: 21.6,
  },
  {
    name: "5ff9f2891c0512000449803e",
    uv: 21.6,
  },
  {
    name: "5ff9f60d1c05120004498040",
    uv: 21.5,
  },
  {
    name: "5ff9f7a962deec000448b505",
    uv: 21.3,
  },
  {
    name: "5ff9fb2d62deec000448b507",
    uv: 21.3,
  },
  {
    name: "5ff9feb162deec000448b509",
    uv: 21.3,
  },
  {
    name: "5ffa000a4de1ff0004e02ba8",
    uv: 21.2,
  },
  {
    name: "5ffa038e4de1ff0004e02baa",
    uv: 21.2,
  },
  {
    name: "5ffa07124de1ff0004e02bac",
    uv: 21.2,
  },
  {
    name: "5ffa0878752d040004a58b49",
    uv: 21.2,
  },
  {
    name: "5ffa0bfc752d040004a58b4b",
    uv: 21.3,
  },
  {
    name: "5ffa0f80752d040004a58b4d",
    uv: 21.4,
  },
  {
    name: "5ffa1226a4106f0004f049f8",
    uv: 21.2,
  },
  {
    name: "5ffa15aaa4106f0004f049fa",
    uv: 21.2,
  },
  {
    name: "5ffa192ea4106f0004f049fc",
    uv: 21.2,
  },
  {
    name: "5ffa1a5b360da00004011a0c",
    uv: 21.1,
  },
  {
    name: "5ffa1ddf360da00004011a0e",
    uv: 21,
  },
  {
    name: "5ffa2163360da00004011a10",
    uv: 21,
  },
  {
    name: "5ffa22e488bfab0004cda932",
    uv: 21,
  },
  {
    name: "5ffa266888bfab0004cda934",
    uv: 20.9,
  },
  {
    name: "5ffa29ec88bfab0004cda936",
    uv: 20.9,
  },
  {
    name: "5ffa2ba6d829ae00044838ac",
    uv: 20.9,
  },
  {
    name: "5ffa2f2ad829ae00044838ae",
    uv: 20.8,
  },
  {
    name: "5ffa32aed829ae00044838b0",
    uv: 20.8,
  },
  {
    name: "5ffa3632d829ae00044838b2",
    uv: 20.7,
  },
  {
    name: "5ffa39b6d829ae00044838b4",
    uv: 20.8,
  },
  {
    name: "5ffa3b0eb09927000449120b",
    uv: 20.7,
  },
  {
    name: "5ffa3e92b09927000449120d",
    uv: 20.6,
  },
  {
    name: "5ffa4216b09927000449120f",
    uv: 20.7,
  },
  {
    name: "5ffa459ab099270004491211",
    uv: 20.7,
  },
  {
    name: "5ffa491eb099270004491213",
    uv: 20.5,
  },
  {
    name: "5ffa4a39569490000499bde3",
    uv: 20.6,
  },
  {
    name: "5ffa4dbd569490000499bde5",
    uv: 20.6,
  },
  {
    name: "5ffa5141569490000499bde7",
    uv: 20.5,
  },
  {
    name: "5ffa526eede88a00048aabc5",
    uv: 20.5,
  },
  {
    name: "5ffa55f2ede88a00048aabc7",
    uv: 20.4,
  },
  {
    name: "5ffa5976ede88a00048aabc9",
    uv: 20.5,
  },
  {
    name: "5ffa5a9f0ac71a000472f4d1",
    uv: 20.5,
  },
  {
    name: "5ffa5e230ac71a000472f4d3",
    uv: 20.5,
  },
  {
    name: "5ffa61a70ac71a000472f4d5",
    uv: 20.4,
  },
  {
    name: "5ffa633a80e2900004f4552f",
    uv: 20.4,
  },
  {
    name: "5ffa66be80e2900004f45531",
    uv: 20.3,
  },
  {
    name: "5ffa6a4280e2900004f45533",
    uv: 20.4,
  },
  {
    name: "5ffa6b8848f0a500047c4adb",
    uv: 20.4,
  },
  {
    name: "5ffa6f0c48f0a500047c4add",
    uv: 20.4,
  },
  {
    name: "5ffa729048f0a500047c4adf",
    uv: 20.4,
  },
  {
    name: "5ffa732f59d2cb0004d04d8b",
    uv: 20.4,
  },
  {
    name: "5ffa76b359d2cb0004d04d8d",
    uv: 20.3,
  },
  {
    name: "5ffa7a3759d2cb0004d04d8f",
    uv: 20.3,
  },
  {
    name: "5ffa7baf71e294000477d749",
    uv: 20.4,
  },
  {
    name: "5ffa7f3371e294000477d74b",
    uv: 20.4,
  },
  {
    name: "5ffa82b771e294000477d74d",
    uv: 20.4,
  },
  {
    name: "5ffa837341dbed00049433b2",
    uv: 20.4,
  },
  {
    name: "5ffa86f741dbed00049433b4",
    uv: 20.2,
  },
  {
    name: "5ffa8a7b41dbed00049433b6",
    uv: 20.2,
  },
  {
    name: "5ffa8bf8e294c70004b98027",
    uv: 20.2,
  },
  {
    name: "5ffa8f7ce294c70004b98029",
    uv: 20.1,
  },
  {
    name: "5ffa9300e294c70004b9802b",
    uv: 20.3,
  },
  {
    name: "5ffa94483362f20004e4c9cc",
    uv: 20.1,
  },
  {
    name: "5ffa97cc3362f20004e4c9ce",
    uv: 20.3,
  },
  {
    name: "5ffa9b503362f20004e4c9d0",
    uv: 20.2,
  },
  {
    name: "5ffa9eaca17c250004119f5b",
    uv: 20.3,
  },
  {
    name: "5ffaa230a17c250004119f5d",
    uv: 20.5,
  },
  {
    name: "5ffaa5b4a17c250004119f5f",
    uv: 20.5,
  },
  {
    name: "5ffaa6ed9f276300040e3084",
    uv: 20.3,
  },
  {
    name: "5ffaaa719f276300040e3086",
    uv: 20.4,
  },
  {
    name: "5ffaadf59f276300040e3088",
    uv: 20.3,
  },
  {
    name: "5ffaaf16d1ea1f000406552c",
    uv: 20.4,
  },
  {
    name: "5ffab17413a8650004b480b3",
    uv: 20.4,
  },
  {
    name: "5ffab4f813a8650004b480b5",
    uv: 20.5,
  },
  {
    name: "5ffab87c13a8650004b480b7",
    uv: 20.5,
  },
  {
    name: "5ffab9bbd3e8850004809efb",
    uv: 20.5,
  },
  {
    name: "5ffabd3fd3e8850004809efd",
    uv: 20.5,
  },
  {
    name: "5ffac0c3d3e8850004809eff",
    uv: 20.6,
  },
  {
    name: "5ffac170f08a5700040e5f59",
    uv: 20.5,
  },
  {
    name: "5ffac4f4f08a5700040e5f5b",
    uv: 20.7,
  },
  {
    name: "5ffac878f08a5700040e5f5d",
    uv: 20.6,
  },
  {
    name: "5ffacbfcf08a5700040e5f5f",
    uv: 20.5,
  },
  {
    name: "5ffacf80f08a5700040e5f61",
    uv: 20.5,
  },
  {
    name: "5ffad0c817d86c00049c09d8",
    uv: 20.5,
  },
  {
    name: "5ffad44c17d86c00049c09da",
    uv: 20.5,
  },
  {
    name: "5ffad7d017d86c00049c09dc",
    uv: 20.5,
  },
  {
    name: "5ffad8a0e82a74000462a391",
    uv: 20.5,
  },
  {
    name: "5ffadc24e82a74000462a393",
    uv: 20.6,
  },
  {
    name: "5ffadfa8e82a74000462a395",
    uv: 20.8,
  },
  {
    name: "5ffae32ce82a74000462a397",
    uv: 20.8,
  },
  {
    name: "5ffae451e63176000432cb66",
    uv: 20.8,
  },
  {
    name: "5ffae7d5e63176000432cb68",
    uv: 20.7,
  },
  {
    name: "5ffaeb59e63176000432cb6a",
    uv: 20.8,
  },
  {
    name: "5ffaec5009a54500047de695",
    uv: 20.9,
  },
  {
    name: "5ffaefd409a54500047de697",
    uv: 20.9,
  },
  {
    name: "5ffaf35809a54500047de699",
    uv: 21.1,
  },
  {
    name: "5ffaf4c7f9e1ef000451cb83",
    uv: 21.1,
  },
  {
    name: "5ffaf84bf9e1ef000451cb85",
    uv: 21,
  },
  {
    name: "5ffafbcff9e1ef000451cb87",
    uv: 21,
  },
  {
    name: "5ffafcadd9646a00041c20af",
    uv: 21.1,
  },
  {
    name: "5ffb0031d9646a00041c20b1",
    uv: 21.1,
  },
  {
    name: "5ffb03b5d9646a00041c20b3",
    uv: 21.1,
  },
  {
    name: "5ffb052094d3220004e3156f",
    uv: 21,
  },
  {
    name: "5ffb08a494d3220004e31571",
    uv: 21,
  },
  {
    name: "5ffb0c2894d3220004e31573",
    uv: 20.9,
  },
  {
    name: "5ffb0d346273760004c41fc8",
    uv: 20.8,
  },
  {
    name: "5ffb10b86273760004c41fca",
    uv: 20.8,
  },
  {
    name: "5ffb143c6273760004c41fcc",
    uv: 20.7,
  },
  {
    name: "5ffb174374d1a40004bac84c",
    uv: 20.7,
  },
  {
    name: "5ffb1ac774d1a40004bac84e",
    uv: 20.6,
  },
  {
    name: "5ffb1e4b74d1a40004bac850",
    uv: 20.7,
  },
  {
    name: "5ffb21cf74d1a40004bac852",
    uv: 20.8,
  },
  {
    name: "5ffb2288cf121700044cf8e3",
    uv: 20.8,
  },
  {
    name: "5ffb260ccf121700044cf8e5",
    uv: 20.7,
  },
  {
    name: "5ffb2990cf121700044cf8e7",
    uv: 20.6,
  },
  {
    name: "5ffb2b37d489450004899b50",
    uv: 20.6,
  },
  {
    name: "5ffb2ebbd489450004899b52",
    uv: 20.5,
  },
  {
    name: "5ffb323fd489450004899b54",
    uv: 20.5,
  },
  {
    name: "5ffb33690326120004213995",
    uv: 20.4,
  },
  {
    name: "5ffb36ed0326120004213997",
    uv: 20.3,
  },
  {
    name: "5ffb3a710326120004213999",
    uv: 20.4,
  },
  {
    name: "5ffb3b09ba18b000040ed9a9",
    uv: 20.5,
  },
  {
    name: "5ffb3e8dba18b000040ed9ab",
    uv: 20.6,
  },
  {
    name: "5ffb4211ba18b000040ed9ad",
    uv: 20.5,
  },
  {
    name: "5ffb432e2dbe70000458eefe",
    uv: 20.3,
  },
  {
    name: "5ffb46b22dbe70000458ef00",
    uv: 20.4,
  },
  {
    name: "5ffb4a362dbe70000458ef02",
    uv: 20.2,
  },
  {
    name: "5ffb4b0f75b139000417251e",
    uv: 20.2,
  },
  {
    name: "5ffb4e9375b1390004172520",
    uv: 20.2,
  },
  {
    name: "5ffb4f26fb490c00042b6a1f",
    uv: 20,
  },
  {
    name: "5ffb52aafb490c00042b6a21",
    uv: 20,
  },
  {
    name: "5ffb562efb490c00042b6a23",
    uv: 20.1,
  },
  {
    name: "5ffb59b2fb490c00042b6a25",
    uv: 20.1,
  },
  {
    name: "5ffb5d36fb490c00042b6a27",
    uv: 20.3,
  },
  {
    name: "5ffb5eec852c1e0004dc77fc",
    uv: 20.4,
  },
  {
    name: "5ffb6270852c1e0004dc77fe",
    uv: 20.4,
  },
  {
    name: "5ffb65f4852c1e0004dc7800",
    uv: 20.4,
  },
  {
    name: "5ffb6954d6c8af0004757318",
    uv: 20.2,
  },
  {
    name: "5ffb6cd8d6c8af000475731a",
    uv: 20.2,
  },
  {
    name: "5ffb705cd6c8af000475731c",
    uv: 20,
  },
  {
    name: "5ffb7184d275da0004db2805",
    uv: 19.9,
  },
  {
    name: "5ffb7508d275da0004db2807",
    uv: 20,
  },
  {
    name: "5ffb788cd275da0004db2809",
    uv: 19.9,
  },
  {
    name: "5ffb7c10d275da0004db280b",
    uv: 19.9,
  },
  {
    name: "5ffb7f94d275da0004db280d",
    uv: 20,
  },
  {
    name: "5ffb8318d275da0004db280f",
    uv: 19.8,
  },
  {
    name: "5ffb86652002f10004102381",
    uv: 19.9,
  },
  {
    name: "5ffb8910d3a4360004747809",
    uv: 19.8,
  },
  {
    name: "5ffb8c3ce4442600049451dc",
    uv: 19.8,
  },
  {
    name: "5ffb8fc0e4442600049451de",
    uv: 19.8,
  },
  {
    name: "5ffb91f1df7b2f0004768fc7",
    uv: 19.8,
  },
  {
    name: "5ffb9575df7b2f0004768fc9",
    uv: 19.8,
  },
  {
    name: "5ffb97e7ad297000046d7ff7",
    uv: 19.8,
  },
  {
    name: "5ffb9b6bad297000046d7ff9",
    uv: 19.8,
  },
  {
    name: "5ffb9eefad297000046d7ffb",
    uv: 19.7,
  },
  {
    name: "5ffb9f93951f94000404d91a",
    uv: 19.7,
  },
  {
    name: "5ffba0b6254a0600047fa639",
    uv: 19.8,
  },
  {
    name: "5ffba43a254a0600047fa63b",
    uv: 19.8,
  },
  {
    name: "5ffba7be254a0600047fa63d",
    uv: 19.7,
  },
  {
    name: "5ffba8f03d9ecc00048a45ff",
    uv: 19.7,
  },
  {
    name: "5ffbac743d9ecc00048a4601",
    uv: 19.7,
  },
  {
    name: "5ffbaff83d9ecc00048a4603",
    uv: 19.7,
  },
  {
    name: "5ffbb152c7370a00043870a8",
    uv: 19.7,
  },
  {
    name: "5ffbb4d6c7370a00043870aa",
    uv: 19.8,
  },
  {
    name: "5ffbb85ac7370a00043870ac",
    uv: 19.6,
  },
  {
    name: "5ffbb8b4db6fd9000448a2e1",
    uv: 19.7,
  },
  {
    name: "5ffbbc38db6fd9000448a2e3",
    uv: 19.7,
  },
  {
    name: "5ffbbfbcdb6fd9000448a2e5",
    uv: 19.6,
  },
  {
    name: "5ffbc07938d3300004840b22",
    uv: 19.6,
  },
  {
    name: "5ffbc3fd38d3300004840b24",
    uv: 19.7,
  },
  {
    name: "5ffbc78138d3300004840b26",
    uv: 19.7,
  },
  {
    name: "5ffbc82df9d66f000490f68c",
    uv: 19.7,
  },
  {
    name: "5ffbcbb1f9d66f000490f68e",
    uv: 19.7,
  },
  {
    name: "5ffbcf35f9d66f000490f690",
    uv: 19.7,
  },
  {
    name: "5ffbd01f5f96e80004453e52",
    uv: 19.7,
  },
  {
    name: "5ffbd3a35f96e80004453e54",
    uv: 19.8,
  },
  {
    name: "5ffbd7275f96e80004453e56",
    uv: 19.7,
  },
  {
    name: "5ffbd7fd47bf250004052c2c",
    uv: 19.4,
  },
  {
    name: "5ffbdb8147bf250004052c2e",
    uv: 19.5,
  },
  {
    name: "5ffbdf0547bf250004052c30",
    uv: 19.5,
  },
  {
    name: "5ffbe068e6e3300004d94f12",
    uv: 19.4,
  },
  {
    name: "5ffbe3ece6e3300004d94f14",
    uv: 19.5,
  },
  {
    name: "5ffbf4a8ae52d10004ac71c1",
    uv: 19.3,
  },
  {
    name: "5ffbf82cae52d10004ac71c3",
    uv: 19.4,
  },
  {
    name: "5ffbfbb0ae52d10004ac71c5",
    uv: 19.8,
  },
  {
    name: "5ffbfc95b53ab70004b19f9b",
    uv: 20,
  },
  {
    name: "5ffc0019b53ab70004b19f9d",
    uv: 20.2,
  },
  {
    name: "5ffc039db53ab70004b19f9f",
    uv: 20.2,
  },
  {
    name: "5ffc04e501d14b00049932d2",
    uv: 20.2,
  },
  {
    name: "5ffc086901d14b00049932d4",
    uv: 20.2,
  },
  {
    name: "5ffc0bed01d14b00049932d6",
    uv: 20.5,
  },
  {
    name: "5ffc0f7101d14b00049932d8",
    uv: 20.8,
  },
  {
    name: "5ffc3db1b1faf1000425260b",
    uv: 21.6,
  },
  {
    name: "5ffc454db1faf1000425260d",
    uv: 21.8,
  },
  {
    name: "5ffc48d1b1faf1000425260f",
    uv: 22,
  },
  {
    name: "5ffc4c55b1faf10004252611",
    uv: 22,
  },
  {
    name: "5ffc4fd9b1faf10004252613",
    uv: 22.2,
  },
  {
    name: "5ffc535db1faf10004252615",
    uv: 22.5,
  },
  {
    name: "5ffc565c0c1cf70004903366",
    uv: 22.5,
  },
  {
    name: "5ffc59e00c1cf70004903368",
    uv: 22.4,
  },
  {
    name: "5ffc5d640c1cf7000490336a",
    uv: 22.3,
  },
  {
    name: "5ffc60e80c1cf7000490336c",
    uv: 22.1,
  },
  {
    name: "5ffc646c0c1cf7000490336e",
    uv: 22.2,
  },
  {
    name: "5ffc651e5b13110004b29136",
    uv: 22.1,
  },
  {
    name: "5ffc68a25b13110004b29138",
    uv: 22,
  },
  {
    name: "5ffc69330d1ad70004e543dd",
    uv: 22.1,
  },
  {
    name: "5ffc6cb70d1ad70004e543df",
    uv: 22.1,
  },
  {
    name: "5ffc703b0d1ad70004e543e1",
    uv: 22.2,
  },
  {
    name: "5ffc715dc68e12000485d3cb",
    uv: 22.3,
  },
  {
    name: "5ffc74e1c68e12000485d3cd",
    uv: 22.3,
  },
  {
    name: "5ffc7865c68e12000485d3cf",
    uv: 22.3,
  },
  {
    name: "5ffc7be9c68e12000485d3d1",
    uv: 22.1,
  },
  {
    name: "5ffc7f6dc68e12000485d3d3",
    uv: 22.1,
  },
  {
    name: "5ffc82f1c68e12000485d3d5",
    uv: 22,
  },
  {
    name: "5ffc8675c68e12000485d3d7",
    uv: 22,
  },
  {
    name: "5ffc888a8af43a0004b9e53b",
    uv: 22,
  },
  {
    name: "5ffc8c0e8af43a0004b9e53d",
    uv: 22,
  },
  {
    name: "5ffc8f928af43a0004b9e53f",
    uv: 22.1,
  },
  {
    name: "5ffc90de708ce3000416016f",
    uv: 22.2,
  },
  {
    name: "5ffc9462708ce30004160171",
    uv: 22.1,
  },
  {
    name: "5ffc97e6708ce30004160173",
    uv: 22,
  },
  {
    name: "5ffc9951475721000454c227",
    uv: 21.8,
  },
  {
    name: "5ffc9cd5475721000454c229",
    uv: 21.8,
  },
  {
    name: "5ffca059475721000454c22b",
    uv: 21.7,
  },
  {
    name: "5ffca14f0d134100049eff37",
    uv: 21.7,
  },
];

class App extends Component {
  render() {
    return (
      <>
        <h1>Vizualizing data from sensor</h1>
        <LineChart width={1920} height={500} data={data}>
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        </LineChart>
      </>
    );
  }
}

export default App;
