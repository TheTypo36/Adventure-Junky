export default home = function (req, res) {
  return res.end(home, {
    html: <div>This is Home Page</div>,
  });
};
