import React, { useState } from "react";
import "./card.scss";
import { useDrag } from "react-use-gesture";
import { animated, config, useSpring } from "react-spring";
import { Button } from "../button/button";
import { Icon } from "../icon/icon";
import "../../../public/img/placeholder.webp";



export const Card = (props: {
    swipeUp?: () => void
    swipeLeft?: () => void
    swipeRight?: () => void
    swipeDown?: () => void
    treshold?: number
}) => {
    const [spring, set] = useSpring(() => ({
        config: {
            friction: 26,
            mass: 1,
            tension: 290
        },
        left: 0,
        top: 0
    }))

    const bind = useDrag(({ initial: [ix, iy], offset: [x, y], vxvy: [vx, vy], direction: [dirX, dirY], down: down }) => {
        if (!down) {
            if (Math.abs(vx) >= props.treshold) {
                if (dirX < 0) {
                    props.swipeLeft ? props.swipeLeft() : null;
                } else if (dirX > 0) {
                    props.swipeRight ? props.swipeRight() : null;
                }
            }
        } else {
            set({ left: x, top: y })
        }
    });
    return (
        <animated.div className="card" {...bind()} style={{ ...spring }}>
            <img className="card__image" src="img/placeholder.webp" />
            <div className="card__content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum semper sapien eleifend ex blandit hendrerit. Nulla venenatis gravida facilisis. In gravida risus sit amet nulla tincidunt, eu volutpat erat pellentesque. Donec tristique erat eu dui fringilla, sit amet placerat nibh ultrices. Pellentesque vel enim congue velit rhoncus sodales at quis tellus. Suspendisse blandit sem molestie sollicitudin interdum. Donec facilisis est sit amet urna ullamcorper vehicula.
            </div>
            <div className="card__buttons">
                <Button floating onClick={props.swipeLeft ? props.swipeLeft : () => {} }><Icon>clear</Icon></Button>
                <div>
                    Swipe or press the buttons
                </div>
                <Button floating onClick={props.swipeRight ? props.swipeRight : () => {} }><Icon>favorite</Icon></Button>
            </div>
        </animated.div>
    )
}
