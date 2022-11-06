<template>
  <div>
    <input type="file" @change="handleFileAsync" />
  </div>
</template>

<script lang="ts">
export default {
  name: 'XlsxVue'
};
</script>

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

async function handleFileAsync(e: any) {
  const file = e.target.files[0];
  const data = await file.arrayBuffer();
  const workbook = xlsx.read(data);

  // 得到工作表
  let worksheet = workbook.Sheets[workbook.SheetNames[0]];
  let jsa: LangXlsx[] = xlsx.utils.sheet_to_json(worksheet);

  const languageDataObj: {
    [prop: string]: {
      [prop: string]: string;
    };
  } = {
    ZH: {},
    EN: {},
    DE: {},
    AR: {},
    ES: {},
    FR: {},
    HI: {},
    JA: {},
    KO: {},
    RU: {},
    TH: {}
  };

  jsa.forEach(({ Key, 俄语, 印地语, 德语, 日语, 汉语, 法语, 泰语, 英语, 西语, 阿拉伯语, 韩语 }) => {
    if (!英语) return;
    languageDataObj['ZH'][Key] = 汉语;
    languageDataObj['EN'][Key] = 英语;
    languageDataObj['AR'][Key] = 阿拉伯语;
    languageDataObj['DE'][Key] = 德语;
    languageDataObj['ES'][Key] = 西语;
    languageDataObj['FR'][Key] = 法语;
    languageDataObj['HI'][Key] = 印地语;
    languageDataObj['JA'][Key] = 日语;
    languageDataObj['KO'][Key] = 韩语;
    languageDataObj['RU'][Key] = 俄语;
    languageDataObj['TH'][Key] = 泰语;
  });
  for (const prop in languageDataObj) {
    console.log(prop, languageDataObj[prop]);
  }
}
</script>
