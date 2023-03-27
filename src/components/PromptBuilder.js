import React, { useState } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import FileCopyOutlinedIcon from "@mui/icons-material/FileCopyOutlined";
import "./PromptBuilder.css";
import Switch from "@mui/material/Switch";
import Slider from "@mui/material/Slider";





function PromptBuilder({ buttonData, buttonDataEN }) {


    const [selectedOptions, setSelectedOptions] = useState(
        buttonData.map((row) => (row.multipleChoice ? [] : null))
    );

    const [language, setLanguage] = useState("de");

    const currentButtonData = language === "de" ? buttonData : buttonDataEN;

    const handleLanguageToggle = () => {
        setLanguage(language === "de" ? "en" : "de");
    };

    const handleInputChange = (rowIndex, value) => {
        const newSelectedOptions = [...selectedOptions];
        newSelectedOptions[rowIndex] = value;
        setSelectedOptions(newSelectedOptions);
    };


    const handleButtonClick = (rowIndex, option) => {
        const newSelectedOptions = [...selectedOptions];
        if (currentButtonData[rowIndex].multipleChoice) {
            const index = newSelectedOptions[rowIndex]?.indexOf(option);
            if (index === -1) {
                newSelectedOptions[rowIndex] = [...newSelectedOptions[rowIndex] || [], option];
            } else {
                newSelectedOptions[rowIndex] = [...newSelectedOptions[rowIndex].slice(0, index), ...newSelectedOptions[rowIndex].slice(index + 1)];
            }
        } else if (option.type === "slider") {
            newSelectedOptions[rowIndex] = option.value;
        } else {
            newSelectedOptions[rowIndex] = option === newSelectedOptions[rowIndex] ? null : option;
        }
        setSelectedOptions(newSelectedOptions);
    };



    const generateText = async () => {
        console.log("generateText function called")
        const summary = selectedOptions
            .map((option, index) => {
                if (
                    (Array.isArray(option) && option.length > 0) ||
                    (!Array.isArray(option) && option)
                ) {
                    if (Array.isArray(option)) {
                        return `${currentButtonData[index].title}: ${option.join(", ")}`;
                    } else {
                        return `${currentButtonData[index].title}: ${option}`;
                    }
                } else {
                    return null;
                }
            })
            .filter(Boolean)
            .join("\n");

        try {
            const response = await fetch("http://localhost:3001/api/generate-text", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ prompt: summary }),
            });

            console.log("Fetch response:", response)

            if (response.ok) {
                const generatedText = await response.json();
                setGeneratedText(generatedText);
                console.log("Generated text:", generatedText);
            } else {
                const errorData = await response.json();
                console.error("Failed to generate text:", errorData.error);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };


    const [generatedText, setGeneratedText] = useState("");

    const copyToClipboard = () => {
        navigator.clipboard.writeText(generatedText).then(
            () => {
                console.log("Copied to clipboard successfully!");
            },
            (err) => {
                console.error("Could not copy text: ", err);
            }
        );
    };




    return (
        <div className="app-container">
            <div className="title-switch-container">

                <div className="language-select">
                    <span className={language === 'de' ? 'DE' : 'EN'}>DE</span>
                    <Switch
                        className="language-switch"
                        checked={language === "en"}
                        onChange={handleLanguageToggle}
                    />
                    <span className={language === 'en' ? 'DE' : 'EN'}>EN</span>
                </div>
                <Typography variant="h4" gutterBottom className="heading">
                    Prompt Builder
                </Typography>
            </div>





            {currentButtonData.map((row, rowIndex) => (
                <div key={`row-${rowIndex}`} className="row-container">
                    <Typography variant="h6" className="row-title">
                        {row.title}
                    </Typography>
                    {row.options.map((option, optionIndex) => (
                        <div className="button-container" key={`option-${optionIndex}`}>
                            {option.type === "input" ? (
                                <input
                                    className="my-input-field"
                                    type="text"
                                    value={selectedOptions[rowIndex] || ""}
                                    onChange={(e) => handleInputChange(rowIndex, e.target.value)}
                                />
                            ) : option.type === "slider" ? (
                                <>
                                    <Typography className="slider-value" gutterBottom>
                                        {selectedOptions[rowIndex] < 100 ? "tl:dr" : selectedOptions[rowIndex] || 0}
                                    </Typography>

                                    <Slider
                                        className="length-slider"
                                        min={0}
                                        max={1000}
                                        step={50}
                                        value={selectedOptions[rowIndex] || 0}
                                        onChange={(e, value) => handleButtonClick(rowIndex, { type: "slider", value })}
                                    />
                                </>
                            ) : (
                                <Button
                                    variant={selectedOptions[rowIndex]?.includes(option) ? "contained" : "outlined"}
                                    onClick={() => handleButtonClick(rowIndex, option)}
                                    className={`button-container ${selectedOptions[rowIndex]?.includes(option) ? "button-selected" : "button-deselected"}`}
                                >
                                    {option}
                                </Button>
                            )}
                        </div>
                    ))}


                </div>
            ))}

            <div className="summary-container">
                {language === "en" ? (
                    <Typography variant="h5" gutterBottom className="prompt-title">
                        Your Prompt
                    </Typography>
                ) : (
                    <Typography variant="h5" gutterBottom className="prompt-title">
                        Dein Prompt
                    </Typography>
                )}
                <div className="summary-options-container">
                    {selectedOptions.map((option, index) => {
                        if (Array.isArray(option) && option.length > 0) {
                            return (
                                <Typography key={`summary-option-${index}`}>
                                    {`${currentButtonData[index].title}: ${option.join(', ')}`}
                                </Typography>
                            );
                        } else if (option && typeof option !== "object") {
                            return (
                                <Typography key={`summary-option-${index}`}>
                                    {`${currentButtonData[index].title}: ${option < 100 && currentButtonData[index].options[0].type === "slider"
                                        ? "tl:dr"
                                        : option
                                        }`}
                                </Typography>
                            );
                        }
                        return null;
                    })}

                </div>
                <Button
                    className="btn-generate"
                    variant="outlined"
                    color="primary"
                    startIcon={<FileCopyIcon />}
                    onClick={async () => {
                        await generateText();
                    }}
                    disabled={selectedOptions.every((option) => !option)}
                >
                    Generate
                </Button>
                <Button
                    className="btn-clipboard"
                    variant="outlined"
                    color="primary"
                    startIcon={<FileCopyOutlinedIcon />}
                    onClick={copyToClipboard}
                    disabled={!generatedText}
                >
                    Copy to clipboard
                </Button>
            </div>

            <div className="generated-text-container">
                <Typography variant="h5" gutterBottom>
                    Generated Text:
                </Typography>
                <Typography>
                    <pre style={{ whiteSpace: "pre-wrap", wordWrap: "break-word", maxWidth: "800px" }}>
                        {generatedText}
                    </pre>
                </Typography>


            </div>

        </div>
    );
}

export default PromptBuilder;
