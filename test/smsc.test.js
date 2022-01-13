/* global it, expect */
import { sendSms } from "../src";

it("success", async () => {
  const data = await sendSms("+37120128611", "тест");
  expect(data.cnt).toEqual(1);
});

it("failure", async () => {
  const data = await sendSms("000", "тест");
  expect(data.error_code).toEqual(1);
});
