import { Router } from "express";

const router = Router();

router.get("/", (_, res) => {
  const teams = [
    { id: 1, bgPic: "img/league.jpg" },
    { id: 2, bgPic: "img/csgo.jpg" },
    { id: 3, bgPic: "img/apex.jpg" },
    { id: 4, bgPic: "img/nle.jpg" },
    { id: 5, bgPic: "img/brawlhalla.jpg" },
    { id: 6, bgPic: "img/cod.jpg" },
    { id: 7, bgPic: "img/fortnite.jpg" },
    { id: 8, bgPic: "img/hearthstone.jpg" },
    { id: 9, bgPic: "img/hearts.jpg" },
    { id: 10, bgPic: "img/legends.jpg" },
    { id: 11, bgPic: "img/overwatch.jpg" },
    { id: 12, bgPic: "img/pubg.jpg" },
  ];

  res.json(teams);
});

export default router;
