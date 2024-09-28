import { useCallback } from 'react';

const useSanitizedInput = () => {

    // Whitelist regex of alphanumerics and common punctuation.
    const whitelist = /^[a-zA-Z0-9\s.,!?'"()@&%$#\-*]*$/;

    const sanitizeInput = (value) => {
        // Oh you want to enter non-whitelisted characters? Womp womp. They're gone.
        let sanitized = value.split('').filter(char => whitelist.test(char)).join('');

        // Limit input to 1000 characters.
        if (sanitized.length > 1000) {
            sanitized = sanitized.substring(0, 1000);
        }

        return sanitized;
    };

    return { sanitizeInput }
};

export default useSanitizedInput;