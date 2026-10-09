import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const logo = await readFile(path.join(process.cwd(), "public/brand/logo-light.svg"));
  const logoSrc = `data:image/svg+xml;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#2d3e50",
          color: "#fbf8f1",
        }}
      >
        <img src={logoSrc} width={262} height={160} alt="" />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ width: 96, height: 6, background: "#e3b341", marginBottom: 36 }} />
          <div style={{ fontSize: 72, lineHeight: 1.05, fontWeight: 700, maxWidth: 980 }}>
            Learn, recite, memorize & live by the Quran.
          </div>
          <div style={{ marginTop: 26, fontSize: 30, color: "#f3d27a" }}>
            Online Quran & Islamic Studies · All ages · Worldwide
          </div>
        </div>
      </div>
    ),
    size
  );
}
