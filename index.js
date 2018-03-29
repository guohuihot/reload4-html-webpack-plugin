function ReloadPlugin() {}

ReloadPlugin.prototype.apply = function(compiler) {
  const io = require("socket.io")(8323);

  const newConnection = function() {
    const socket = io.connect("http://localhost:8323/");

    socket.on("reload", () => {
      window.location.reload();
    });
  };

  compiler.hooks.compilation.tap("Reload4Plugin", compilation => {
    compilation.hooks.htmlWebpackPluginBeforeHtmlProcessing.tap(
      "ReloadPlugin",
      data => {
        data.html += `<script src="http://localhost:8196/socket.io/socket.io.js"></script>`;
        data.html += `<script>
        var socket = io.connect("http://localhost:8196");
        socket.on("reload", function(){
          window.location.reload()
        });
        </script>`;
      }
    );
    compilation.hooks.htmlWebpackPluginAfterEmit.tap("Reload4Plugin", data => {
      io.emit("reload");
    });
  });
};

module.exports = ReloadPlugin;
