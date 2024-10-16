import { parseISO, format } from "date-fns";

const elements = [
  { id: 1, name: "Text with image on right", value: null },
  { id: 2, name: "Text with image on left", value: null },
  { id: 3, name: "Text", value: null },
  { id: 4, name: "Full width image", value: null },
  { id: 6, name: "Youtube video", value: null },
  { id: 7, name: "HTML / Javascript", value: null },
  { id: 8, name: "Autotrader Search Box", value: null },
  { id: 9, name: "Text with pullquote on right", value: null },
  { id: 10, name: "Text with pullquote on left", value: null },
  { id: 11, name: "Related Articles List", value: null },
  { id: 13, name: "Embed Recipes", value: null },
  { id: 14, name: "Split Image", value: null },
  { id: 17, name: "Related Articles Thumbs", value: null },
  { id: 18, name: "Apester poll", value: null },
  { id: 21, name: "Amazon product widget Price comparison", value: null },
  { id: 25, name: "Bulk Image Upload", value: null },
  { id: 27, name: "Top articles", value: null },
  { id: 28, name: "Text with 'read more' article on right", value: null },
  { id: 29, name: "Text with 'read more' article on left", value: null },
  { id: 32, name: "Text with 'breakout box' on right", value: null },
  { id: 33, name: "Text with 'breakout box' on left", value: null },
  { id: 34, name: "Full width 'breakout box'", value: null },
  { id: 37, name: "Affiliate widget", value: null },
  { id: 38, name: "JW Player", value: null },
  { id: 42, name: "LIVE Events", value: null },
  { id: 44, name: "Monetizer 101 Price Comparison", value: null },
  { id: 45, name: "Most commented stories from section", value: null },
  { id: 46, name: "Most popular comments", value: null },
  { id: 47, name: "Headline", value: null },
  { id: 48, name: "Getty Images", value: null },
  { id: 49, name: "Table breakout box", value: null },
  { id: 50, name: "Specification table", value: null },
  { id: 51, name: "What we love/What we don't", value: null },
  { id: 53, name: "Full width pullquote", value: null },
  { id: 55, name: "Buying Guide", value: null },
  { id: 57, name: "Cheetah Poll", value: null },
  { id: 58, name: "Don't Miss", value: null },
  { id: 59, name: "Highlights", value: null },
  { id: 60, name: "TikTok video", value: null },
  { id: 61, name: "Gallery", value: null },
  { id: 62, name: "Solus Newsletter Embed", value: null },
  { id: 63, name: "CHP Image", value: null },
];

const getDate = (string) => {
  let date = parseISO(string);
  return format(date, "yyyy-MM-dd hh:mm");
};

const HTMLparser = (htmlString) => {
  const parser = new DOMParser();
  const html = parser.parseFromString(htmlString, "text/html");

  const articleElement = html.getElementById("singleArticle");

  const article = [
    {
      id: 1,
      name: "type",
      value: html.querySelector('meta[property="og:type"]').content,
    },
    { id: 2, name: "Content type", value: "Regular" },
    { id: 3, name: "Old type", value: "No" },
    {
      id: 4,
      name: "Created",
      value: getDate(
        html.querySelector('meta[property="article:published_time"]').content
      ),
    },
    {
      id: 5,
      name: "Updated",
      value: getDate(
        html.querySelector('meta[property="article:modified_time"]').content
      ),
    },
  ];

  return [article, elements];
};

export default HTMLparser;
