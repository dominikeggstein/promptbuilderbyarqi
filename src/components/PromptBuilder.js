import React, { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import Grid from "@mui/material/Grid";
import "./PromptBuilder.css";

const buttonData = [
    { title: "Aufgabe", options: ["Artikel", "Blog", "Titel-Idee"] },
    { title: "Stil", options: ["Akademisch", "Seriös", "Ironisch", "Sarkastisch"] },
    { title: "Länge", options: ["tl:dr", "100-230", "300-400", "400-500"] },
];

function PromptBuilder() {
    const [selectedOptions, setSelectedOptions] = useState(
        Array(buttonData.length).fill(null)
    );

    const handleButtonClick = (rowIndex, option) => {
        const newSelectedOptions = [...selectedOptions];
        newSelectedOptions[rowIndex] = option === newSelectedOptions[rowIndex] ? null : option;
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
        <Box className="app-container">
            <Typography variant="h4" gutterBottom className="heading">
                Prompt Builder
            </Typography>

            {buttonData.map((row, rowIndex) => (
                <Box key={`row-${rowIndex}`} mb={2}>
                    <Typography variant="h6" className="row-title">
                        {row.title}
                    </Typography>
                    <Grid container spacing={1}>
                        {row.options.map((option, optionIndex) => (
                            <Grid item xs="auto" key={`option-${optionIndex}`}>
                                <Button
                                    variant={selectedOptions[rowIndex] === option ? "contained" : "outlined"}
                                    onClick={() => handleButtonClick(rowIndex, option)}
                                    className={
                                        selectedOptions[rowIndex] === option
                                            ? "button-selected"
                                            : "button-deselected"
                                    }
                                >
                                    {option}
                                </Button>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            ))}

            <Box mt={3}>
                <Typography variant="h6" gutterBottom className="row-title">
                    Dein Prompt
                </Typography>
                <Stack direction="column" alignItems="flex-start" spacing={2}>
                    {selectedOptions
                        .map((option, index) => option ? `${buttonData[index].title}: ${option}` : null)
                        .filter(Boolean)
                        .map((summaryOption, index) => (
                            <Typography key={`summary-option-${index}`}>
                                {summaryOption}
                            </Typography>
                        ))}

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
                </Stack>
            </Box>
        </Box>
    );
}

export default PromptBuilder;
