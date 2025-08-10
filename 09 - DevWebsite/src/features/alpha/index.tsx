import { test } from '@/features/alpha/test'; // erlaubt (gleiches Feature)
import { beta } from '@/features/beta'; // ❌ cross-feature (alpha -> beta)
import { util } from '@/utils/util'; // erlaubt (shared)

export const alphaBad = () => `alpha ${util()} ${beta()}`;

test();
