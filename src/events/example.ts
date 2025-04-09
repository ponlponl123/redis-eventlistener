export const listenerName = 'exampleListener';

export function handler(): void {
    console.log(listenerName, 'Event listener initialized');
    // Add your event listener logic here
}

export default {
    listenerName,
    handler
}