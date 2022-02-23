<template>
  <div>
    <input type="file" @change="handleFileAsync" />
  </div>
</template>

<script setup lang="ts">
import * as xlsx from 'xlsx';

interface LangXlsx {
  Key: string;
  汉语: string;
  英语: string;
  俄语: string;
  印地语: string;
  德语: string;
  日语: string;
  法语: string;
  泰语: string;
  西语: string;
  阿拉伯语: string;
  韩语: string;
}

interface LangObj {
  [prop: string]: string;
}

async function handleFileAsync(e: any) {
  const file = e.target.files[0];
  const data = await file.arrayBuffer();
  const workbook = xlsx.read(data);

  // 得到工作表
  let worksheet = workbook.Sheets[workbook.SheetNames[0]];
  let jsa: LangXlsx[] = xlsx.utils.sheet_to_json(worksheet);

  let ZH: LangObj = {};
  let EN: LangObj = {};
  let AR: LangObj = {};
  let DE: LangObj = {};
  let ES: LangObj = {};
  let FR: LangObj = {};
  let HI: LangObj = {};
  let JA: LangObj = {};
  let KO: LangObj = {};
  let RU: LangObj = {};
  let TH: LangObj = {};

  jsa.forEach(({ Key, 俄语, 印地语, 德语, 日语, 汉语, 法语, 泰语, 英语, 西语, 阿拉伯语, 韩语 }) => {
    ZH[Key] = 汉语;
    EN[Key] = 英语;
    AR[Key] = 阿拉伯语;
    DE[Key] = 德语;
    ES[Key] = 西语;
    FR[Key] = 法语;
    HI[Key] = 印地语;
    JA[Key] = 日语;
    KO[Key] = 韩语;
    RU[Key] = 俄语;
    TH[Key] = 泰语;
  });
  console.log(RU, TH);
}
</script>

<style lang="scss" scoped></style>
