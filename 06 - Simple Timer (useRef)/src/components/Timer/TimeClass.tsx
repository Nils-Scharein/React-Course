class TimeClass {
    private totalSeconds: number;

    constructor(seconds: number) {
        this.totalSeconds = seconds;
    }

    private format(n: number): string {
        return String(n).padStart(2, '0');
    }

    get hours(): string {
        return this.format(Math.floor(this.totalSeconds / 3600));
    }

    get minutes(): string {
        return this.format(Math.floor((this.totalSeconds % 3600) / 60));
    }

    get seconds(): string {
        return this.format(this.totalSeconds % 60);
    }

    toString(): string {
        return `${this.hours}:${this.minutes}:${this.seconds}`;
    }

    toObject(): { hours: string; minutes: string; seconds: string } {
        return {
            hours: this.hours,
            minutes: this.minutes,
            seconds: this.seconds,
        };
    }
}

export default TimeClass