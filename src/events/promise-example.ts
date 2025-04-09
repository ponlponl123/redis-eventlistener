export const listenerName = 'examplePromiseListener';

export async function handler(): Promise<void> {
    console.log(listenerName, 'Event listener initialized');
    // Add your event listener logic here
}

export default {
    listenerName,
    handler
}