export const CarouselActionTypes = {
 SWITCH: "SWITCH"
};

export const SwitchComponent = (payload) => ({
 type: CarouselActionTypes.SWITCH, payload
});
