import { useState } from "react";
import {
  Box,
  Card as MuiCard,
  CardActionArea,
  CardContent,
  CardMedia,
  Dialog,
  DialogContent,
} from "@material-ui/core";
import clsx from "clsx";
import { Typography } from "src/components";
import useThemeStyles from "src/themes/styles";
import variables from "src/themes/variables";
import Props from "./props";
import useStyles from "./styles";

const ProjectItem = (props: Props) => {
  const classes = useStyles();
  const themeClasses = useThemeStyles();
  const { item } = props;
  const [openDialog, setOpenDialog] = useState(false);

  const onOpenDialog = () => {
    setOpenDialog(true);
  };
  const onCloseDialog = () => {
    setOpenDialog(false);
  };

  return item.visible ? (
    <MuiCard className={clsx(classes.card)} onClick={onOpenDialog}>
      <CardActionArea>
        {item.coverVisible && (
          <CardMedia
            className={classes.img}
            component="img"
            image={item.cover ? item.cover : variables.comingSoonUrl}
          />
        )}
        <CardContent>
          {item.nameVisible && (
            <Typography color="primary" variant="h6">
              {item.name}
            </Typography>
          )}
          {item.technologyVisible && (
            <Typography variant="subtitle2">{item.technology}</Typography>
          )}
          {item.descriptionVisible && (
            <Box mt={2} overflow="hidden">
              <Typography
                className={themeClasses.cardDescription}
                variant="body2"
              >
                {item.description}
              </Typography>
            </Box>
          )}
        </CardContent>
      </CardActionArea>
      <Dialog open={openDialog} onClose={onCloseDialog}>
        <Box className={classes.dialogContainer}>
          <DialogContent>
            {item.coverVisible && (
              <CardMedia
                className={classes.imgDialog}
                component="img"
                image={item.cover ? item.cover : variables.comingSoonUrl}
              />
            )}
            <CardContent>
              {item.nameVisible && (
                <Typography color="primary" variant="h6">
                  {item.name}
                </Typography>
              )}
              {item.technologyVisible && (
                <Typography variant="subtitle2">{item.technology}</Typography>
              )}
              {item.descriptionVisible && (
                <Box mt={2} overflow="hidden">
                  <Typography
                    className={themeClasses.cardDescription}
                    variant="body2"
                  >
                    {item.description}
                  </Typography>
                </Box>
              )}
            </CardContent>
          </DialogContent>
        </Box>
      </Dialog>
    </MuiCard>
  ) : (
    <div />
  );
};

export default ProjectItem;
