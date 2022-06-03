import {
    trigger,
    transition,
    style,
    query,
    group,
    animateChild,
    animate,
    keyframes,
} from '@angular/animations';

export const fader =
    trigger('routeAnimations', [
        transition('* <=> *', [
            // Set a default  style for enter and leave
            query(':enter, :leave', [
                style({
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    // width: '100%',
                    opacity: 0,
                    transform: 'scale(0) translateY(100%)',
                    'padding-left': '1.4em',
                    'padding-right': '1.4em',

                }),
            ], { optional: true }),
            // Animate the new page in
            query(':enter', [
                animate('1000ms ease', style({ opacity: 1, transform: 'scale(1) translateY(0)' })),
            ], { optional: true })
        ]),
    ]);