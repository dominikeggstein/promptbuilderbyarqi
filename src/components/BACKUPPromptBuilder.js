import React, { useState } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import buttonData from "./buttonData";
import "./PromptBuilder.css";



function PromptBuilder() {
    const [selectedOptions, setSelectedOptions] = useState(
        buttonData.map((row) => (row.multipleChoice ? [] : null))
    );


    const handleButtonClick = (rowIndex, option) => {
        const newSelectedOptions = [...selectedOptions];
        if (buttonData[rowIndex].multipleChoice) {
            const index = newSelectedOptions[rowIndex]?.indexOf(option);
            if (index === -1) {
                newSelectedOptions[rowIndex] = [...newSelectedOptions[rowIndex] || [], option];
            } else {
                newSelectedOptions[rowIndex] = [...newSelectedOptions[rowIndex].slice(0, index), ...newSelectedOptions[rowIndex].slice(index + 1)];
            }
        } else {
            newSelectedOptions[rowIndex] = option === newSelectedOptions[rowIndex] ? null : option;
        }
        setSelectedOptions(newSelectedOptions);
    };


    const copyToClipboard = () => {
        const summary = selectedOptions
            .map((option, index) => option ? `${buttonData[index].title}: ${option}` : null)
            .filter(Boolean)
            .join("\n");
        navigator.clipboard.writeText(summary).then(
            () => {
                console.log("Text copied to clipboard");
            },
            (err) => {
                console.error("Failed to copy text: ", err);
            }
        );
    };

    return (
        <div className="app-container">
            <Typography variant="h4" gutterBottom className="heading">
                Prompt Builder
            </Typography>

            {buttonData.map((row, rowIndex) => (
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
                                    onChange={(e) => handleButtonClick(rowIndex, e.target.value)}
                                />
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
                <Typography variant="h5" gutterBottom className="prompt-title">
                    Dein Prompt
                </Typography>
                <div className="summary-options-container">
                    {selectedOptions
                        .map((option, index) => option ? `${buttonData[index].title}: ${option}` : null)
                        .filter(Boolean)
                        .map((summaryOption, index) => (
                            <Typography key={`summary-option-${index}`}>
                                {summaryOption}
                            </Typography>
                        ))}
                </div>
                <Button
                    className="btn-clipboard"
                    variant="outlined"
                    color="primary"
                    startIcon={<FileCopyIcon />}
                    onClick={copyToClipboard}
                    disabled={selectedOptions.every((option) => !option)}
                >
                    Copy to clipboard
                </Button>
            </div>
        </div>
    );
}

export default PromptBuilder;
