// public/lead-widget.js

(function () {
  const widget = document.createElement("div");
  widget.id = "real-estate-chatbot";
  widget.style.position = "fixed";
  widget.style.bottom = "20px";
  widget.style.right = "20px";
  widget.style.width = "300px";
  widget.style.height = "400px";
  widget.style.border = "1px solid #ccc";
  widget.style.borderRadius = "10px";
  widget.style.background = "#fff";
  widget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
  widget.style.overflow = "hidden";
  widget.style.zIndex = "9999";

  widget.innerHTML = `
    <div style="background:#093157;color:#fff;padding:10px;text-align:center;">
      👋 Hi! I'm your local real estate assistant.
    </div>
    <div id="chat-body" style="padding:10px;height:300px;overflow-y:auto;font-size:14px;">
      <p>Are you looking to <button onclick="sendResponse('buy')">Buy</button> or <button onclick="sendResponse('sell')">Sell</button>?</p>
    </div>
    <div style="padding:5px;text-align:center;font-size:11px;color:#666;">
      By continuing you consent to be contacted by our team.
    </div>
  `;

  document.body.appendChild(widget);

  window.sendResponse = async function (response) {
    const chatBody = document.getElementById("chat-body");
    chatBody.innerHTML += `<p><b>You:</b> ${response}</p>`;

    if (response === "buy" || response === "sell") {
      chatBody.innerHTML += "<p>Great! What's your budget?</p>";
    }
  };
})();
