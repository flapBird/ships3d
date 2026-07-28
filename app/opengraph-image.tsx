import { ImageResponse } from "next/og";

export const alt = "Ships 3D — Multiplayer naval battles in your browser";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          color: "white",
          background:
            "radial-gradient(circle at 78% 15%, #247d91 0%, #0d4257 32%, #061d2e 70%, #041522 100%)",
          padding: "72px 80px",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: "-80px",
            bottom: "-190px",
            width: "760px",
            height: "360px",
            borderRadius: "50%",
            border: "28px solid rgba(69, 211, 230, 0.15)",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: "-120px",
            bottom: "-130px",
            width: "700px",
            height: "260px",
            borderRadius: "50%",
            border: "22px solid rgba(69, 211, 230, 0.12)",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "820px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "24px",
              color: "#67e8f9",
              fontSize: 26,
              fontWeight: 800,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
            }}
          >
            Free browser naval battles
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 92,
              lineHeight: 1,
              fontWeight: 900,
              letterSpacing: "-0.04em",
            }}
          >
            Ships 3D
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "24px",
              maxWidth: "760px",
              color: "#d7edf2",
              fontSize: 34,
              lineHeight: 1.35,
              fontWeight: 600,
            }}
          >
            Steer, fire cannons, and crew a ship with friends — directly in your browser.
          </div>
          <div style={{ display: "flex", gap: "14px", marginTop: "34px" }}>
            {["Multiplayer", "No download", "Crew co-op"].map((label) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  border: "1px solid rgba(255,255,255,0.22)",
                  borderRadius: 999,
                  background: "rgba(255,255,255,0.09)",
                  padding: "10px 18px",
                  color: "#ffffff",
                  fontSize: 21,
                  fontWeight: 700,
                }}
              >
                {label}
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            right: "82px",
            top: "72px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            border: "5px solid rgba(103,232,249,0.7)",
            background: "rgba(4,21,34,0.55)",
            color: "#67e8f9",
            fontSize: 84,
            fontWeight: 900,
          }}
        >
          3D
        </div>
      </div>
    ),
    size,
  );
}
