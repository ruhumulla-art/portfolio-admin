/*
  MEDIA CONFIG FILE - auto-updated by admin.html, save time: 2026-08-29T07:30:34.654Z
*/

const mediaConfig = {
  profileImage: {
    label: "Profile Photo (About Section)",
    type: "image",
    url: "https://res.cloudinary.com/dfzyrcron/image/upload/v1787987388/Profile_kuv9f2.jpg"
  },

  cvFile: {
    label: "CV / Resume PDF",
    type: "file",
    url: "https://res.cloudinary.com/dfzyrcron/image/upload/v1787988628/gqa5ivmbdlnqujr3v7jj.pdf"
  },

  iamsProjectImage: {
    label: "Internal Audit Management System - Workflow Image",
    type: "image",
    url: "Iaudit.png"
  },

  seoTotalViews: {
    label: "SEO Case Study - Total Views",
    type: "image",
    url: "Total Views of Mazamh24.png"
  },

  seoLocationViews: {
    label: "SEO Case Study - Location Wise Views",
    type: "image",
    url: "Location wise views of MAZAMH24.png"
  },

  seoPopularPost: {
    label: "SEO Case Study - Popular Post",
    type: "image",
    url: "Popular Post.png"
  },

  seoAudience: {
    label: "SEO Case Study - Audience",
    type: "image",
    url: "Mazamh24.live-Audiance.png"
  },

  adsCtrClicks: {
    label: "Google Ads - CTR & Clicks",
    type: "image",
    url: "https://res.cloudinary.com/dfzyrcron/image/upload/v1767512511/Google_adsense_apprval_z9jcpl.png"
  },

  adsApprovalEmail: {
    label: "Google Ads - Approval Email",
    type: "image",
    url: "https://res.cloudinary.com/dfzyrcron/image/upload/v1767512386/Google_ads_Approval_Email_hrbtom.png"
  },

  adsCampaign: {
    label: "Google Ads - My Campaign",
    type: "image",
    url: "https://res.cloudinary.com/dfzyrcron/image/upload/v1767512384/Google_ads_tlhbfu.png"
  },

  adsenseApproval: {
    label: "Google Adsense - Approval",
    type: "image",
    url: "Google adsense apprval.png"
  },

  certOutskill: {
    label: "Certificate - AI For Engineers (Outskill)",
    type: "image",
    url: "Outskill Certificate Firoj.png"
  },

  certPromptEngineering: {
    label: "Certificate - Prompt Engineering",
    type: "image",
    url: "Firoj Mulla Certificate.png"
  },

  certDigitalGarage: {
    label: "Certificate - Digital Garage",
    type: "image",
    url: "Digital garage.png"
  }
};

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-media-key]").forEach((el) => {
    const key = el.getAttribute("data-media-key");
    const entry = mediaConfig[key];
    if (!entry || !entry.url) return;
    if (el.tagName === "IMG" || el.tagName === "VIDEO" || el.tagName === "SOURCE") {
      el.setAttribute("src", entry.url);
    } else if (el.tagName === "A") {
      el.setAttribute("href", entry.url);
    }
  });
});
