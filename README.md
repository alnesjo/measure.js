# metis

```javascript
import {min, s, ms} from '@alnesjo/metis';

let duration = s(300);
duration.s.toString(); // '300s'

duration = min(duration.min + 1);
duration.s.toString(); // '360s'

duration = ms(duration.ms - 500);
duration.s.toString(); // '359.5s'
```
