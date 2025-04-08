exports.testRoute = (req, res) => {
    console.log("✅ testRoute controller hit!");
    res.status(200).json({
      message: "✅ Hello from the controller!",
    });
  };
  