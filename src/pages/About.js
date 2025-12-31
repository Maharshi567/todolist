import React from "react";

export const About = () => {
  // Media query helper for inline styles
  const getResponsiveStyles = () => {
    if (window.innerWidth <= 480) {
      // Small mobile screens
      return {
        containerPadding: "30px 15px",
        cardPadding: "30px 20px",
        headingFontSize: "2.4rem",
        descriptionFontSize: "1rem",
        featureFontSize: "1rem",
        creatorFontSize: "1rem",
        creatorButtonFontSize: "1rem",
      };
    } else if (window.innerWidth <= 768) {
      // Tablets / medium screens
      return {
        containerPadding: "40px 20px",
        cardPadding: "35px 40px",
        headingFontSize: "3rem",
        descriptionFontSize: "1.1rem",
        featureFontSize: "1.1rem",
        creatorFontSize: "1.05rem",
        creatorButtonFontSize: "1.05rem",
      };
    } else {
      // Desktop
      return {
        containerPadding: "50px 20px",
        cardPadding: "45px 55px",
        headingFontSize: "3.4rem",
        descriptionFontSize: "1.2rem",
        featureFontSize: "1.18rem",
        creatorFontSize: "1.15rem",
        creatorButtonFontSize: "1.15rem",
      };
    }
  };

  const styles = getResponsiveStyles();

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f5f7fa 0%, #dbe9f4 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: styles.containerPadding,
        fontFamily: "'Poppins', sans-serif",
        color: "#2c3e50",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          width: "100%",
          background: "rgba(255, 255, 255, 0.85)",
          borderRadius: "30px",
          boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
          padding: styles.cardPadding,
          boxSizing: "border-box",
          color: "#34495e",
          userSelect: "text",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontSize: styles.headingFontSize,
            fontWeight: "900",
            marginBottom: "36px",
            background: "linear-gradient(90deg, #6dd5fa, #2980b9)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            MozBackgroundClip: "text",
            MozTextFillColor: "transparent",
            letterSpacing: "0.05em",
            userSelect: "none",
            textShadow: "0 3px 10px rgba(41, 128, 185, 0.2)",
          }}
        >
          About This App
        </h1>

        <div
          style={{
            background: "rgba(255, 255, 255, 0.95)",
            borderRadius: "25px",
            padding: styles.cardPadding,
            boxShadow: "0 12px 30px rgba(0,0,0,0.07)",
            color: "#34495e",
            fontSize: styles.descriptionFontSize,
            lineHeight: "1.75",
            userSelect: "text",
            transition: "box-shadow 0.3s ease",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.boxShadow =
              "0 18px 40px rgba(41, 128, 185, 0.15)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.boxShadow = "0 12px 30px rgba(0,0,0,0.07)")
          }
        >
          <p style={{ marginBottom: "30px" }}>
            This ToDo List app helps you manage your daily tasks efficiently and
            beautifully. Add tasks, mark them as complete, and delete them with
            ease. Designed with simplicity and responsiveness in mind, it works
            perfectly on both desktop and mobile devices.
          </p>

          <h3
            style={{
              marginBottom: "22px",
              fontWeight: "700",
              fontSize: "1.5rem",
              color: "#2980b9",
              textShadow: "0 1px 3px rgba(41, 128, 185, 0.3)",
              userSelect: "none",
            }}
          >
            Key Features:
          </h3>

          <ul
            style={{
              listStyleType: "none",
              paddingLeft: "24px",
              color: "#2c3e50",
              fontWeight: "500",
              fontSize: styles.featureFontSize,
            }}
          >
            {[
              "Quickly add and manage tasks.",
              "Delete tasks easily once completed.",
              "Track your progress visually.",
              "Fully responsive design for all devices.",
              "Sleek, modern, and intuitive interface.",
            ].map((feature, idx) => (
              <li
                key={idx}
                style={{
                  position: "relative",
                  paddingLeft: "32px",
                  marginBottom: "18px",
                  userSelect: "text",
                  color: "#34495e",
                  fontWeight: "600",
                  letterSpacing: "0.02em",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    left: 0,
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: "18px",
                    height: "18px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #6dd5fa, #2980b9)",
                    boxShadow: "0 0 8px #2980b9cc",
                  }}
                ></span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div
          style={{
            marginTop: "60px",
            textAlign: "center",
            color: "#34495e",
            userSelect: "text",
            fontSize: styles.creatorFontSize,
            fontWeight: "500",
          }}
        >
          <p style={{ marginBottom: "12px" }}>
            Created with ❤️ by <strong>Maharshi Danidhariya</strong>
          </p>
          <p
            style={{
              marginBottom: "18px",
              fontWeight: "400",
              color: "#556b8b",
            }}
          >
            Follow me on LinkedIn for more projects and updates:
          </p>
          <a
            href="https://www.linkedin.com/in/maharshi-danidhariya/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              color: "#fff",
              background: "linear-gradient(135deg, #6dd5fa, #2980b9)",
              padding: "12px 28px",
              borderRadius: "50px",
              fontWeight: "700",
              fontSize: styles.creatorButtonFontSize,
              textDecoration: "none",
              boxShadow: "0 8px 30px rgba(41, 128, 185, 0.5)",
              transition: "background 0.3s ease",
              userSelect: "none",
              cursor: "pointer",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background =
                "linear-gradient(135deg, #2980b9, #6dd5fa)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background =
                "linear-gradient(135deg, #6dd5fa, #2980b9)")
            }
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
              alt="LinkedIn"
              style={{ width: "26px", height: "26px", marginRight: "14px" }}
              draggable={false}
            />
            Maharshi Danidhariya
          </a>
        </div>
      </div>
    </div>
  );
};
