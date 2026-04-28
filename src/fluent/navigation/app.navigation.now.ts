import "@servicenow/sdk/global";
import { ApplicationMenu } from "@servicenow/sdk/core";

export const home_menu = ApplicationMenu({
  $id: Now.ID["home-page-menu"],
  title: "Home Page",
  hint: "Welcome / Home",
  description: "Modern welcome page",
  active: true,
});