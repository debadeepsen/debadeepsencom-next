import fs from 'fs/promises'
import path from 'path'

export const fetchHmPlan = async () => {
    const filePath = path.join(
        process.cwd(),
        'src',
        'static',
        'sea_south_asia_honeymoon_strategy.html'
    )
    const html = await fs.readFile(filePath, 'utf8')
    return html
}