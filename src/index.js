import checkEnv from "@nitra/check-env";
import fetch from "node-fetch";

checkEnv(["SMSC_LOGIN", "SMSC_PASS"]);

const login = process.env.SMSC_LOGIN;
const password = process.env.SMSC_PASS;
const charset = "utf-8";

// Отправка CMC
export const sendSms = async (phones, message, sender = null) => {
  try {
    const params = new URLSearchParams();
    params.append("login", login);
    params.append("psw", password);
    params.append("charset", charset);
    params.append("fmt", 3);
    params.append("phones", phones);
    params.append("mes", message);
    if (sender) {
      params.append("sender", sender);
    }

    const response = await fetch("https://smsc.ru/sys/send.php", {
      method: "POST",
      body: params,
    });
    const data = await response.json();

    return data;
  } catch (err) {
    console.error(err);
    return err;
  }
};

// коды операторов
const masks = {
  // ua
  "050": "ua",
  "066": "ua",
  "095": "ua",
  "099": "ua",
  "067": "ua",
  "068": "ua",
  "096": "ua",
  "097": "ua",
  "098": "ua",
  "063": "ua",
  "093": "ua",
  "073": "ua",
  "077": "ua",
  // ru
  900: "ru",
  901: "ru",
  902: "ru",
  903: "ru",
  904: "ru",
  905: "ru",
  906: "ru",
  908: "ru",
  909: "ru",
  910: "ru",
  911: "ru",
  912: "ru",
  913: "ru",
  914: "ru",
  915: "ru",
  916: "ru",
  917: "ru",
  918: "ru",
  919: "ru",
  920: "ru",
  921: "ru",
  922: "ru",
  923: "ru",
  924: "ru",
  925: "ru",
  926: "ru",
  927: "ru",
  928: "ru",
  929: "ru",
  930: "ru",
  931: "ru",
  932: "ru",
  933: "ru",
  934: "ru",
  936: "ru",
  937: "ru",
  938: "ru",
  939: "ru",
  941: "ru",
  950: "ru",
  951: "ru",
  952: "ru",
  953: "ru",
  954: "ru",
  955: "ru",
  956: "ru",
  958: "ru",
  960: "ru",
  961: "ru",
  962: "ru",
  963: "ru",
  964: "ru",
  965: "ru",
  966: "ru",
  967: "ru",
  968: "ru",
  969: "ru",
  970: "ru",
  971: "ru",
  977: "ru",
  978: "ru",
  980: "ru",
  981: "ru",
  982: "ru",
  983: "ru",
  984: "ru",
  985: "ru",
  986: "ru",
  987: "ru",
  988: "ru",
  989: "ru",
  991: "ru",
  992: "ru",
  993: "ru",
  994: "ru",
  995: "ru",
  996: "ru",
  997: "ru",
  999: "ru",
};

// получить страну по коду оператора из телефона
export const getCountry = (phone) => {
  const mask = phone.slice(-10, -7);
  if (mask && masks[mask]) {
    return masks[mask];
  }
  return undefined;
};
