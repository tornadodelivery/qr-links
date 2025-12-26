function downloadContact() {
    // vCard Content
    const vCardData = [
        "BEGIN:VCARD",
        "VERSION:3.0",
        "FN:Tornado Delivery",
        "ORG:Tornado Delivery",
        "TEL;TYPE=CELL:+963945966622",
        "TEL;TYPE=WORK:+963962059896",
        "URL:" + window.location.href,
        "NOTE:Fast. Reliable. Everywhere.",
        "END:VCARD"
    ].join("\n");

    // Create Blob and Trigger Download
    const blob = new Blob([vCardData], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "TornadoDelivery.vcf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
