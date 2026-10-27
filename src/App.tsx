import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react"
import {
  AlignLeft,
  BarChart3,
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckSquare,
  ChevronDown,
  ChevronRight,
  CircleDot,
  FileQuestion,
  Hash,
  Layers,
  ListChecks,
  ListOrdered,
  Mail,
  MapPin,
  Menu,
  Phone,
  PhoneCall,
  Search,
  X,
} from "lucide-react"
import { cybersecurityThemes, type Question, type QuestionType, type Theme } from "./data/cybersecurityThemes"

type CtaRipple = {
  x: number
  y: number
  size: number
  key: number
}

const additionalQuestions: Question[] = [
  {
    number: "A1",
    statement: "What role did peer recommendations play in your awareness journey?",
    instruction: "Rate from 1 (Not important) to 5 (Very important)",
    type: "rating",
    additional: true,
  },
  {
    number: "A2",
    statement: "Did you attend any demo/trial class before shortlisting? If yes, what stood out?",
    instruction: "Select one and share details",
    type: "yes-detail",
    additional: true,
  },
]

function Button({
  children,
  className = "",
  onClick,
  type = "button",
}: {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  type?: "button" | "submit"
}) {
  return (
    <button className={`ds-button ${className}`} onClick={onClick} type={type}>
      {children}
    </button>
  )
}

function SiteHeader({ searchOpen, onSearchOpenChange }: {
  searchOpen: boolean
  onSearchOpenChange: (open: boolean) => void
}) {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (searchOpen) {
      setMenuOpen(false)
    }
  }, [searchOpen])

  return (
    <>
      <div className="utility-bar">
        <div className="page-container utility-inner">
          <div className="latest-report">
            <strong>Latest reports:</strong>
            <span>India Makhana Market Outlook to 2030</span>
            <ArrowRight aria-hidden="true" size={12} />
          </div>
          <div className="utility-links">
            <a href="#procurement">Procurement</a>
            <a href="#company">Company</a>
            <a href="#login">Log in</a>
          </div>
        </div>
      </div>
      <header className="site-header">
        <div className="page-container header-inner">
          <button type="button" className="mobile-menu-trigger" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} aria-controls="mobile-nav-panel" onClick={() => {
            onSearchOpenChange(false)
            setMenuOpen((current) => !current)
          }}>
            {menuOpen ? <X aria-hidden="true" size={21} /> : <Menu aria-hidden="true" size={21} />}
          </button>
          <a className="brand" href="#top" aria-label="Ken Research home">
            <img src="/assets/079cb.svg" alt="" />
            <img src="/assets/98552.svg" alt="Ken Research" />
          </a>
          <nav className="site-nav" aria-label="Primary navigation">
            {["Services", "Industries", "Resources"].map((item) => (
              <a href={`#${item.toLowerCase()}`} key={item}>
                {item}
                <ChevronDown aria-hidden="true" size={13} />
              </a>
            ))}
            <a
              className="nav-search"
              href="#questionnaire-search"
              aria-expanded={searchOpen}
              aria-controls="mobile-dock-search"
              onClick={(event) => {
                if (!window.matchMedia("(max-width: 64rem)").matches) return
                event.preventDefault()
                onSearchOpenChange(!searchOpen)
              }}
            >
              Search
              <Search aria-hidden="true" size={15} />
            </a>
          </nav>
          <Button className="header-cta">Schedule a Demo</Button>
        </div>
        <nav className="mobile-nav-panel" id="mobile-nav-panel" aria-label="Mobile navigation" hidden={!menuOpen}>
          {["Services", "Industries", "Resources"].map((item) => (
            <a href={`#${item.toLowerCase()}`} key={item} onClick={() => setMenuOpen(false)}>{item}<ChevronRight aria-hidden="true" size={17} /></a>
          ))}
          <Button className="mobile-nav-panel__cta" onClick={() => setMenuOpen(false)}>Schedule a Demo</Button>
        </nav>
      </header>
    </>
  )
}

function Breadcrumb() {
  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <ol>
        <li><a href="/">Home</a></li>
        <li className="breadcrumb-separator" aria-hidden="true"><ChevronRight size={12} /></li>
        <li><a href="/survey">Ken Survey</a></li>
        <li className="breadcrumb-separator" aria-hidden="true"><ChevronRight size={12} /></li>
        <li><a href="/survey/cybersecurity-perception">Cybersecurity Perception Survey</a></li>
        <li className="breadcrumb-separator" aria-hidden="true"><ChevronRight size={12} /></li>
        <li><span aria-current="page">Questionnaire</span></li>
      </ol>
    </nav>
  )
}

function HeroResearchMetric({
  icon,
  label,
}: {
  icon: React.ReactNode
  label: string
}) {
  return (
    <div className="hero-metric">
      {icon}
      <span>{label}</span>
    </div>
  )
}

function HeroStats({ plain = false }: { plain?: boolean }) {
  return (
    <div className={`hero-stats${plain ? " hero-stats--plain" : ""}`} aria-label="Questionnaire at a glance">
      <div className="hero-stat">
        {!plain && <span className="hero-stat-icon"><Layers aria-hidden="true" size={30} strokeWidth={1.8} /></span>}
        <div className="hero-stat-copy"><strong>08</strong><span>{plain ? "RESEARCH THEMES" : "TENETS"}</span></div>
      </div>
      <div className="hero-stat">
        {!plain && <span className="hero-stat-icon"><FileQuestion aria-hidden="true" size={30} strokeWidth={1.8} /></span>}
        <div className="hero-stat-copy"><strong>10</strong><span>{plain ? "QUESTIONS IN CURRENT THEME" : "QUESTIONS IN EACH TENET"}</span></div>
      </div>
      <div className="hero-stat">
        {!plain && <span className="hero-stat-icon"><BarChart3 aria-hidden="true" size={30} strokeWidth={1.8} /></span>}
        <div className="hero-stat-copy"><strong>Enterprise</strong><span>RESEARCH FOCUS</span></div>
      </div>
    </div>
  )
}

function LaptopHeroIllustration() {
  return (
    <img
      className="hero-reference-art"
      src="/assets/cybersecurity-survey-browser.png"
      alt="Survey questionnaire window with floating analytics and security cards"
    />
  )
}

function CardsHeroIllustration() {
  const [reducedMotion, setReducedMotion] = useState(() =>
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  )
  const [videoFailed, setVideoFailed] = useState(false)

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)")
    const updatePreference = () => setReducedMotion(preference.matches)
    preference.addEventListener("change", updatePreference)
    return () => preference.removeEventListener("change", updatePreference)
  }, [])

  return (
    <div className="hero-reference-art research-cards-media" role="img" aria-label="Survey answers being selected as research charts update">
      {reducedMotion || videoFailed ? (
        <img src="/assets/research-cards-survey-v2-poster.png" alt="" />
      ) : (
        <video autoPlay muted loop playsInline preload="metadata" poster="/assets/research-cards-survey-v2-poster.png" onError={() => setVideoFailed(true)} aria-hidden="true">
          <source src="/assets/research-cards-survey-v2.mp4" type="video/mp4" />
        </video>
      )}
    </div>
  )
}

type HeroAppearance = "laptop" | "cards" | "minimal"

function SurveyHero({
  appearance,
  onAppearanceChange,
}: {
  appearance: HeroAppearance
  onAppearanceChange: (appearance: HeroAppearance) => void
}) {

  return (
    <section className={`survey-hero survey-hero--${appearance}${appearance === "minimal" ? " survey-hero--light" : ""}`} aria-labelledby="survey-title">
      <div className="page-container hero-inner">
        <div className="hero-variant-toggle" role="group" aria-label="Hero appearance">
          <button type="button" aria-pressed={appearance === "laptop"} onClick={() => onAppearanceChange("laptop")}>Survey Visual</button>
          <button type="button" aria-pressed={appearance === "cards"} onClick={() => onAppearanceChange("cards")}>Research Cards</button>
          <button type="button" aria-pressed={appearance === "minimal"} onClick={() => onAppearanceChange("minimal")}>Key Stats</button>
        </div>
        <Breadcrumb />
        <div className="hero-copy">
          <div className="hero-topline">
            <p className="eyebrow">SURVEY QUESTIONNAIRE</p>
          </div>
          <h1 id="survey-title">
            Cybersecurity<span className="hero-title-second-line"> Perception Survey</span>
          </h1>
          <p className="hero-description">
            {appearance === "minimal"
              ? "Explore the complete set of research themes and sample questions designed to understand enterprise perspectives on cybersecurity risks, solutions and decision-making."
              : "Follow the enterprise security decision journey, from the first risk review to vendor renewal."}
          </p>
          {(appearance === "laptop" || appearance === "cards") && <div className="hero-metrics" aria-label="Questionnaire information">
            <HeroResearchMetric icon={<Layers size={19} />} label="8 Tenets" />
            <HeroResearchMetric icon={<FileQuestion size={19} />} label="80 Survey Questions" />
            <HeroResearchMetric icon={<ListChecks size={19} />} label="Multiple Answer Formats" />
          </div>}
        </div>
        {appearance === "laptop" ? <LaptopHeroIllustration /> : appearance === "cards" ? <CardsHeroIllustration /> : <HeroStats plain={appearance === "minimal"} />}
      </div>
    </section>
  )
}

function AnimatedArrow({
  isHovered,
}: {
  isHovered: boolean
}) {
  return (
    <span className="animated-arrow" aria-hidden="true">
      <ArrowUpRight
        className={`animated-arrow__icon ${isHovered ? "is-exiting" : ""}`}
        size={16}
        strokeWidth={2}
      />
      <ArrowUpRight
        className={`animated-arrow__icon animated-arrow__icon--incoming ${
          isHovered ? "is-entering" : ""
        }`}
        size={16}
        strokeWidth={2}
      />
    </span>
  )
}

function ConsultationButton({ compact = false }: { compact?: boolean }) {
  const [isHovering, setIsHovering] = useState(false)
  const [ripples, setRipples] = useState<CtaRipple[]>([])
  const buttonRef = useRef<HTMLAnchorElement>(null)

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const button = buttonRef.current
    if (!button) return

    const rect = button.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height)
    const clickX = event.detail === 0 ? rect.width / 2 : event.clientX - rect.left
    const clickY = event.detail === 0 ? rect.height / 2 : event.clientY - rect.top
    const ripple = {
      x: clickX - size / 2,
      y: clickY - size / 2,
      size,
      key: Date.now() + Math.random(),
    }

    setRipples((current) => [...current, ripple])
    window.setTimeout(() => {
      setRipples((current) =>
        current.filter((item) => item.key !== ripple.key),
      )
    }, 600)
  }

  return (
    <a
      ref={buttonRef}
      className={`brand-consult-button${compact ? " brand-consult-button--compact" : ""}`}
      href="mailto:info@kenresearch.com?subject=Cybersecurity%20survey%20questionnaire"
      onClick={handleClick}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onFocus={() => setIsHovering(true)}
      onBlur={() => setIsHovering(false)}
    >
      {ripples.map((ripple) => (
        <span
          className="brand-consult-button__ripple"
          key={ripple.key}
          style={{
            left: ripple.x,
            top: ripple.y,
            width: ripple.size,
            height: ripple.size,
          }}
        />
      ))}
      <span
        className={`brand-consult-button__shimmer ${
          isHovering ? "is-hovered" : ""
        }`}
      />
      <span className="brand-consult-button__label">
        Talk to a survey consultant
      </span>
      <AnimatedArrow isHovered={isHovering} />
    </a>
  )
}

function ConsultationCTA() {
  return (
    <aside className="consultation-cta">
      <div className="consultation-icon">
        <PhoneCall aria-hidden="true" size={20} />
      </div>
      <h3>Need a tailored questionnaire?</h3>
      <p>
        Speak with our research team about adapting these questions to your
        audience and study goals.
      </p>
      <ConsultationButton />
    </aside>
  )
}

function MobileActionDock({ visible, searchOpen, query, onSearchOpenChange, onQueryChange }: {
  visible: boolean
  searchOpen: boolean
  query: string
  onSearchOpenChange: (open: boolean) => void
  onQueryChange: (value: string) => void
}) {
  const searchInputRef = useRef<HTMLInputElement>(null)
  const searchTriggerRef = useRef<HTMLButtonElement>(null)
  const restoreTriggerFocus = useRef(false)

  useEffect(() => {
    if (searchOpen) searchInputRef.current?.focus()
    else if (restoreTriggerFocus.current) {
      restoreTriggerFocus.current = false
      searchTriggerRef.current?.focus()
    }
  }, [searchOpen])

  const closeSearch = () => {
    restoreTriggerFocus.current = true
    onSearchOpenChange(false)
  }

  return (
    <aside className="mobile-action-dock" data-visible={visible} aria-label="Questionnaire actions" inert={!visible}>
      {searchOpen ? (
        <div className="mobile-action-dock__search" id="mobile-dock-search" role="search">
          <Search aria-hidden="true" size={19} />
          <input
            ref={searchInputRef}
            type="search"
            value={query}
            onChange={(event) => {
              onQueryChange(event.target.value)
              if (event.target.value.trim()) {
                window.requestAnimationFrame(() => document.getElementById("questionnaire")?.scrollIntoView({ block: "start" }))
              }
            }}
            onKeyDown={(event) => {
              if (event.key === "Escape") closeSearch()
            }}
            placeholder="Search questions or answers"
            aria-label="Search questions and answers across all tenets"
          />
          {query && <button type="button" aria-label="Clear search" onClick={() => {
            onQueryChange("")
            searchInputRef.current?.focus()
          }}><X aria-hidden="true" size={17} /></button>}
          <button type="button" aria-label="Close search" onClick={closeSearch}><X aria-hidden="true" size={19} /></button>
        </div>
      ) : (
        <>
          <div className="mobile-action-dock__actions">
            <button ref={searchTriggerRef} type="button" className="mobile-action-dock__search-trigger" aria-label="Search questionnaire" aria-controls="mobile-dock-search" aria-expanded={false} onClick={() => onSearchOpenChange(true)}>
              <Search aria-hidden="true" size={20} />
            </button>
            <ConsultationButton compact />
          </div>
        </>
      )}
    </aside>
  )
}

function ResearchThemeSidebar({ deferUntilHeroExit, pastHero }: { deferUntilHeroExit: boolean; pastHero: boolean }) {
  return (
    <div className={`sidebar-sticky${deferUntilHeroExit ? " sidebar-sticky--deferred" : ""}`} data-cta-visible={!deferUntilHeroExit || pastHero}>
      <ConsultationCTA />
    </div>
  )
}

function Highlight({ text, query }: { text: string; query: string }) {
  const term = query.trim()
  if (!term) return <>{text}</>
  const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  const parts = text.split(new RegExp(`(${escaped})`, "ig"))
  return (
    <>
      {parts.map((part, index) =>
        part.toLowerCase() === term.toLowerCase() ? (
          <mark key={`${part}-${index}`}>{part}</mark>
        ) : (
          part
        ),
      )}
    </>
  )
}

function QuestionnaireSearch({
  value,
  onChange,
}: {
  value: string
  onChange: (value: string) => void
}) {
  return (
    <div className="questionnaire-search" id="questionnaire-search">
      <Search aria-hidden="true" size={19} />
      <label htmlFor="question-search">Search questions and answers across all tenets</label>
      <input
        id="question-search"
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search questions or answers"
      />
      {value && (
        <button
          type="button"
          aria-label="Clear questionnaire search"
          className="clear-search"
          onClick={() => onChange("")}
        >
          <X aria-hidden="true" size={17} />
        </button>
      )}
    </div>
  )
}

function RadioAnswer({ name, options, query }: { name: string; options: string[]; query: string }) {
  return (
    <fieldset className="answer-options">
      <legend className="sr-only">Choose one response</legend>
      {options.map((option) => (
        <label className="answer-option" key={option}>
          <input type="radio" name={name} value={option} />
          <span className="radio-control" aria-hidden="true" />
          <span><Highlight text={option} query={query} /></span>
        </label>
      ))}
    </fieldset>
  )
}

function CheckboxAnswer({ options, query }: { options: string[]; query: string }) {
  const [selected, setSelected] = useState<string[]>([])
  const toggleOption = (option: string) => {
    setSelected((current) => {
      if (current.includes(option)) return current.filter((value) => value !== option)
      if (option === "None of these") return [option]
      return [...current.filter((value) => value !== "None of these"), option]
    })
  }

  return (
    <fieldset className="answer-options">
      <legend className="sr-only">Choose all applicable responses</legend>
      {options.map((option) => (
        <label className="answer-option" key={option}>
          <input type="checkbox" value={option} checked={selected.includes(option)} onChange={() => toggleOption(option)} />
          <span className="checkbox-control" aria-hidden="true">
            <Check size={10} />
          </span>
          <span><Highlight text={option} query={query} /></span>
        </label>
      ))}
    </fieldset>
  )
}

function NumericAnswer({ placeholder, min, max }: { placeholder: string; min?: number; max?: number }) {
  return (
    <label className="field-label">
      <span className="sr-only">{placeholder}</span>
      <input
        className="text-field numeric-field"
        type="number"
        min={min}
        max={max}
        placeholder="Enter a number"
      />
      <span className="field-hint">{placeholder}</span>
    </label>
  )
}

function TextAnswer({ placeholder }: { placeholder: string }) {
  return (
    <label className="field-label">
      <span className="sr-only">Written response</span>
      <textarea
        className="text-field text-area"
        placeholder={placeholder}
        rows={4}
      />
    </label>
  )
}

function RankingAnswer({ options, questionId, query }: { options: string[]; questionId: string; query: string }) {
  const [ranks, setRanks] = useState<Record<string, string>>({})
  const updateRank = (option: string, rank: string) => {
    setRanks((current) => {
      const next = { ...current }
      Object.keys(next).forEach((key) => {
        if (next[key] === rank) next[key] = ""
      })
      next[option] = rank
      return next
    })
  }

  return (
    <>
      <p className="ranking-hint">Choose up to three signals and give each a unique rank. Rank 1 is highest.</p>
      <fieldset className="ranking-options">
        <legend className="sr-only">Assign first, second, and third rank</legend>
        {options.map((option) => (
          <div className="ranking-option" data-ranked={Boolean(ranks[option])} key={option}>
            <label htmlFor={`rank-${questionId}-${option}`}><Highlight text={option} query={query} /></label>
            <div className="select-wrap">
              <span className="rank-display" aria-hidden="true">
                {ranks[option] === "1" ? "Top choice" : ranks[option] === "2" ? "Second choice" : ranks[option] === "3" ? "Third choice" : "+ Rank"}
              </span>
              <select
                id={`rank-${questionId}-${option}`}
                value={ranks[option] || ""}
                onChange={(event) => updateRank(option, event.target.value)}
                aria-label={`Rank ${option}`}
              >
                <option value="">Not ranked</option>
                <option value="1">1 — Highest</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
              <ChevronDown aria-hidden="true" size={16} />
            </div>
          </div>
        ))}
        <p className="field-hint">Use each rank once. Rank 1 is the highest priority.</p>
      </fieldset>
    </>
  )
}

function RatingAnswer({ questionId }: { questionId: string }) {
  return (
    <div className="rating-answer">
      <div className="rating-options" role="radiogroup" aria-label="Importance rating from one to five">
        {[1, 2, 3, 4, 5].map((value) => (
          <label className="rating-option" key={value}>
            <input type="radio" name={`rating-${questionId}`} value={value} aria-label={`${value} out of 5`} />
            <span>{value}</span>
          </label>
        ))}
      </div>
      <div className="rating-labels"><span>Not important</span><span>Very important</span></div>
    </div>
  )
}

function YesDetailAnswer() {
  const [answer, setAnswer] = useState("")
  return (
    <div className="yes-detail-answer">
      <div className="yes-no-options" role="radiogroup" aria-label="Attended a demo or trial class">
        {["Yes", "No"].map((option) => (
          <label className="answer-option" key={option}>
            <input
              type="radio"
              name="attended-trial"
              value={option}
              checked={answer === option}
              onChange={() => setAnswer(option)}
            />
            <span className="radio-control" aria-hidden="true" />
            <span>{option}</span>
          </label>
        ))}
      </div>
      {answer === "Yes" && (
        <label className="field-label">
          <span className="sr-only">What stood out about the demo or trial class?</span>
          <textarea
            className="text-field text-area"
            placeholder="What stood out about the class?"
            rows={3}
          />
        </label>
      )}
    </div>
  )
}

function DropdownAnswer({ options }: { options: string[] }) {
  return (
    <label className="field-label select-wrap standalone-select">
      <span className="sr-only">Select a response</span>
      <select defaultValue="">
        <option value="" disabled>
          Select a response
        </option>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
      <ChevronDown aria-hidden="true" size={16} />
    </label>
  )
}

function QuestionTypeMeta({
  type,
  instruction,
}: {
  type: QuestionType
  instruction: string
}) {
  const Icon =
    type === "single"
      ? CircleDot
      : type === "multi"
        ? CheckSquare
        : type === "number"
          ? Hash
          : type === "text"
            ? AlignLeft
            : type === "rating"
              ? ListOrdered
              : type === "yes-detail"
                ? CircleDot
                : ListOrdered

  return (
    <div className="question-type-meta">
      <Icon aria-hidden="true" size={12} />
      <span>{instruction}</span>
    </div>
  )
}

function QuestionItem({
  question,
  query,
  themeId,
  hidden = false,
}: {
  question: Question
  query: string
  themeId: string
  hidden?: boolean
}) {
  const questionId = `${themeId}-question-${question.number}`
  const questionRef = useRef<HTMLElement>(null)
  const [hasEntered, setHasEntered] = useState(false)

  useEffect(() => {
    if (hidden || hasEntered || typeof IntersectionObserver === "undefined") return
    const element = questionRef.current
    if (!element) return

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      setHasEntered(true)
      observer.disconnect()
    }, { rootMargin: "0px 0px -10% 0px", threshold: 0.05 })

    observer.observe(element)
    return () => observer.disconnect()
  }, [hidden, hasEntered])

  return (
    <article ref={questionRef} className={`question-item${hasEntered ? " question-item--reveal" : ""}`} aria-labelledby={`${questionId}-title`} hidden={hidden}>
      <div className="question-number">
        {String(question.number).padStart(2, "0")}
      </div>
      <div className="question-content">
        <h3 id={`${questionId}-title`}>
          <Highlight text={question.statement} query={query} />
        </h3>
        <div className="question-answer-body" id={`${questionId}-answer`}>
          <QuestionTypeMeta type={question.type} instruction={question.instruction} />
          {question.type === "single" && question.options && (
            <RadioAnswer
              name={`${themeId}-question-${question.number}`}
              options={question.options}
              query={query}
            />
          )}
          {question.type === "multi" && question.options && (
            <CheckboxAnswer options={question.options} query={query} />
          )}
          {question.type === "number" && (
            <NumericAnswer
              placeholder={question.placeholder || "Enter a number"}
              min={question.min}
              max={question.max}
            />
          )}
          {question.type === "text" && (
            <TextAnswer placeholder={question.placeholder || "Enter your response"} />
          )}
          {question.type === "ranking" && question.options && (
            <RankingAnswer options={question.options} questionId={questionId} query={query} />
          )}
          {question.type === "rating" && <RatingAnswer questionId={questionId} />}
          {question.type === "yes-detail" && <YesDetailAnswer />}
        </div>
      </div>
    </article>
  )
}

function EmptySearchState({
  query,
  onClear,
}: {
  query: string
  onClear: () => void
}) {
  return (
    <div className="empty-state" role="status">
      <Search aria-hidden="true" size={24} />
      <h3>No questions found</h3>
      <p>
        No question or answer option matches “{query}”. Try another search term.
      </p>
      <Button className="secondary-button" onClick={onClear}>
        Clear search
      </Button>
    </div>
  )
}

const INITIAL_QUESTIONS = 4
const QUESTIONS_PER_BATCH = 4

function ThemeQuestionList({
  item,
  query,
  expanded,
}: {
  item: Theme & { matches: Question[] }
  query: string
  expanded: boolean
}) {
  const [visibleCount, setVisibleCount] = useState(INITIAL_QUESTIONS)
  const loadMoreRef = useRef<HTMLDivElement>(null)
  const searching = Boolean(query.trim())
  const hasMore = !searching && visibleCount < item.questions.length
  const visibleAdditional = item.questions.some((question, index) =>
    question.additional && item.matches.includes(question) && (searching || index < visibleCount),
  )

  useEffect(() => {
    if (!expanded || !hasMore || typeof IntersectionObserver === "undefined") return
    const target = loadMoreRef.current
    if (!target) return

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      observer.disconnect()
      setVisibleCount((count) => Math.min(count + QUESTIONS_PER_BATCH, item.questions.length))
    }, { rootMargin: "0px" })

    observer.observe(target)
    return () => observer.disconnect()
  }, [expanded, hasMore, item.questions.length, visibleCount])

  return (
    <>
      <div className="question-list" aria-live="polite">
        {item.questions.map((question, index) => (
          <div key={`${item.id}-${question.number}`}>
            {question.additional && visibleAdditional &&
              !item.questions.slice(0, index).some((earlier) => earlier.additional) && (
                <div className="additional-questions">
                  <p className="additional-questions__eyebrow">ADDITIONAL EXAMPLE FORMATS</p>
                  <h3>For other survey types</h3>
                  <p>These two test-prep examples show a rating and a yes/no question with a follow-up response.</p>
                </div>
              )}
            <QuestionItem
              question={question}
              query={query}
              themeId={item.id}
              hidden={!item.matches.includes(question) || (!searching && index >= visibleCount)}
            />
          </div>
        ))}
      </div>
      {hasMore && (
        <div className="question-load-more" ref={loadMoreRef}>
          <button type="button" onClick={() => setVisibleCount((count) => Math.min(count + QUESTIONS_PER_BATCH, item.questions.length))}>
            Load more questions <span>({Math.min(visibleCount, item.questions.length)} of {item.questions.length} shown)</span>
          </button>
        </div>
      )}
    </>
  )
}

function ResearchThemeSection({
  activeThemeId,
  query,
  onQueryChange,
  onToggleTheme,
}: {
  activeThemeId: string | null
  query: string
  onQueryChange: (value: string) => void
  onToggleTheme: (themeId: string) => void
}) {
  const term = query.trim().toLowerCase()
  const [collapsedSearchThemes, setCollapsedSearchThemes] = useState<Set<string>>(new Set())
  const displayThemes = useMemo(() => {
    const questionsFor = (item: Theme) => [
      ...item.questions,
      ...(item.number === 1 ? additionalQuestions : []),
    ]
    return cybersecurityThemes
      .map((item) => ({
        ...item,
        questions: questionsFor(item),
        matches: term
          ? questionsFor(item).filter((question) =>
              question.statement.toLowerCase().includes(term) ||
              question.options?.some((option) => option.toLowerCase().includes(term)),
            )
          : questionsFor(item),
      }))
  }, [term])
  const resultCount = displayThemes.reduce((total, item) => total + item.matches.length, 0)

  useEffect(() => {
    setCollapsedSearchThemes(new Set())
  }, [query])

  useEffect(() => {
    let frame = 0
    let activeElement: HTMLElement | null = null
    const updateActiveQuestion = () => {
      frame = 0
      const focusLine = window.innerHeight * 0.38
      const candidates = Array.from(document.querySelectorAll<HTMLElement>(
        ".theme-accordion-body:not([hidden]) .question-item:not([hidden])",
      ))
        .map((element) => ({ element, rect: element.getBoundingClientRect() }))
        .filter(({ rect }) => rect.bottom > 0 && rect.top < window.innerHeight)
      const next = candidates.find(({ rect }) => rect.top <= focusLine && rect.bottom >= focusLine)?.element
        ?? candidates.sort((a, b) => Math.abs(a.rect.top - focusLine) - Math.abs(b.rect.top - focusLine))[0]?.element
        ?? null

      if (activeElement === next) return
      if (activeElement) delete activeElement.dataset.active
      if (next) next.dataset.active = "true"
      activeElement = next
    }
    const scheduleUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateActiveQuestion)
    }
    const content = document.querySelector<HTMLElement>(".theme-content")
    const resizeObserver = typeof ResizeObserver !== "undefined" ? new ResizeObserver(scheduleUpdate) : null
    if (content) resizeObserver?.observe(content)
    window.addEventListener("scroll", scheduleUpdate, { passive: true })
    window.addEventListener("resize", scheduleUpdate)
    scheduleUpdate()
    return () => {
      window.removeEventListener("scroll", scheduleUpdate)
      window.removeEventListener("resize", scheduleUpdate)
      resizeObserver?.disconnect()
      window.cancelAnimationFrame(frame)
      if (activeElement) delete activeElement.dataset.active
    }
  }, [activeThemeId, query])

  return (
    <section className="theme-content" id="questionnaire" aria-labelledby="theme-heading">
      <p className="theme-marker" id="theme-heading">
        8 TENETS · 80 QUESTIONS
      </p>
      <QuestionnaireSearch value={query} onChange={onQueryChange} />
      {term && resultCount > 0 && (
        <p className="questionnaire-search-status" role="status">
          {resultCount} matching {resultCount === 1 ? "question" : "questions"} across {displayThemes.filter((item) => item.matches.length > 0).length} {displayThemes.filter((item) => item.matches.length > 0).length === 1 ? "tenet" : "tenets"}
        </p>
      )}
        <div className="theme-accordion" hidden={resultCount === 0}>
          {displayThemes.map((item) => {
            const expanded = term ? !collapsedSearchThemes.has(item.id) : activeThemeId === item.id
            return (
              <section className="theme-accordion-item" id={`theme-panel-${item.id}`} key={item.id} hidden={item.matches.length === 0}>
                <h3>
                  <button
                    type="button"
                    className="theme-accordion-trigger"
                    aria-expanded={expanded}
                    aria-controls={`theme-questions-${item.id}`}
                    onClick={() => {
                      if (!term) return onToggleTheme(item.id)
                      setCollapsedSearchThemes((current) => {
                        const next = new Set(current)
                        if (next.has(item.id)) next.delete(item.id)
                        else next.add(item.id)
                        return next
                      })
                    }}
                  >
                    <span className="theme-accordion-heading">
                      <span className="theme-accordion-number">TENET {String(item.number).padStart(2, "0")}</span>
                      <span className="theme-accordion-title">{item.name}</span>
                    </span>
                    <span className="theme-accordion-count">{term ? `${item.matches.length} results` : "10 questions"}</span>
                    <ChevronDown className="theme-accordion-chevron" aria-hidden="true" size={20} />
                  </button>
                </h3>
                <div className="theme-accordion-body" id={`theme-questions-${item.id}`} hidden={!expanded}>
                  <p className="theme-accordion-description">{item.description}</p>
                  <ThemeQuestionList item={item} query={query} expanded={expanded} />
                </div>
              </section>
            )
          })}
        </div>
      {resultCount === 0 && <EmptySearchState query={query} onClear={() => onQueryChange("")} />}
    </section>
  )
}

const footerSections = [
  {
    title: "Explore",
    links: [
      { label: "Survey questionnaire", href: "#questionnaire" },
      { label: "Research tenets", href: "#questionnaire" },
      { label: "Search questions", href: "#questionnaire-search" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Survey solutions", href: "https://www.kenresearch.com/survey" },
      { label: "Custom research", href: "https://www.kenresearch.com/services" },
      { label: "Industry reports", href: "https://www.kenresearch.com/industry-reports" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About us", href: "https://www.kenresearch.com/about-us" },
      { label: "Contact us", href: "https://www.kenresearch.com/contact-us" },
      { label: "Careers", href: "https://www.kenresearch.com/careers" },
    ],
  },
]

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-container footer-main">
        <div className="footer-brand-column">
          <a className="footer-brand" href="#top" aria-label="Ken Research, back to top">
            <span className="footer-brand-mark"><img src="/assets/079cb.svg" alt="" /></span>
            <img className="footer-brand-name" src="/assets/98552.svg" alt="Ken Research" />
          </a>
          <p>Market intelligence and research that help businesses make informed decisions.</p>
          <div className="footer-contact">
            <a href="mailto:info@kenresearch.com"><Mail aria-hidden="true" size={16} />info@kenresearch.com</a>
            <a href="tel:+919015006060"><Phone aria-hidden="true" size={16} />+91 9015 006 060</a>
            <span><MapPin aria-hidden="true" size={16} />Gurgaon, Haryana, India</span>
          </div>
        </div>
        <nav className="footer-navigation" aria-label="Footer navigation">
          {footerSections.map((section) => (
            <div className="footer-link-column" key={section.title}>
              <h2>{section.title}</h2>
              <ul>
                {section.links.map((link) => <li key={link.label}><a href={link.href}>{link.label}</a></li>)}
              </ul>
            </div>
          ))}
        </nav>
      </div>
      <div className="footer-bottom">
        <div className="page-container footer-bottom-inner">
          <span>© {new Date().getFullYear()} Ken Research Pvt. Ltd. All rights reserved.</span>
          <div>
            <a href="https://www.kenresearch.com/terms-and-conditions#privacyPolicy">Privacy Policy</a>
            <a href="https://www.kenresearch.com/terms-and-conditions#termsAndCondition">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  const [heroAppearance, setHeroAppearance] = useState<HeroAppearance>("cards")
  const [pastHero, setPastHero] = useState(false)
  const [footerInView, setFooterInView] = useState(false)
  const [editingAnswer, setEditingAnswer] = useState(false)
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [activeThemeId, setActiveThemeId] = useState<string | null>(cybersecurityThemes[0].id)
  const pendingThemeScroll = useRef<string | null>(null)

  useEffect(() => {
    const updateHeroPosition = () => {
      const hero = document.querySelector<HTMLElement>(".survey-hero")
      setPastHero(!hero || hero.getBoundingClientRect().bottom <= 0)
      const footer = document.querySelector<HTMLElement>(".site-footer")
      setFooterInView(Boolean(footer && footer.getBoundingClientRect().top <= window.innerHeight))
    }
    window.addEventListener("scroll", updateHeroPosition, { passive: true })
    window.addEventListener("resize", updateHeroPosition)
    updateHeroPosition()
    return () => {
      window.removeEventListener("scroll", updateHeroPosition)
      window.removeEventListener("resize", updateHeroPosition)
    }
  }, [heroAppearance, query])

  useEffect(() => {
    const updateEditingState = () => {
      const active = document.activeElement
      setEditingAnswer(Boolean(active && active.closest("#questionnaire") && active.matches("input, textarea, select")))
    }
    const updateAfterBlur = () => window.requestAnimationFrame(updateEditingState)
    document.addEventListener("focusin", updateEditingState)
    document.addEventListener("focusout", updateAfterBlur)
    return () => {
      document.removeEventListener("focusin", updateEditingState)
      document.removeEventListener("focusout", updateAfterBlur)
    }
  }, [])

  useLayoutEffect(() => {
    if (!activeThemeId || pendingThemeScroll.current !== activeThemeId) return
    pendingThemeScroll.current = null
    document.getElementById(`theme-panel-${activeThemeId}`)?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
      block: "start",
    })
  }, [activeThemeId])

  const toggleTheme = (themeId: string) => {
    const opening = activeThemeId !== themeId
    pendingThemeScroll.current = opening ? themeId : null
    setActiveThemeId(opening ? themeId : null)
  }

  return (
    <div id="top">
      <SiteHeader searchOpen={mobileSearchOpen} onSearchOpenChange={setMobileSearchOpen} />
      <SurveyHero appearance={heroAppearance} onAppearanceChange={setHeroAppearance} />
      <main className={`page-container questionnaire-layout${heroAppearance === "cards" ? " questionnaire-layout--cards" : ""}`}>
        <ResearchThemeSection
          activeThemeId={activeThemeId}
          query={query}
          onQueryChange={setQuery}
          onToggleTheme={toggleTheme}
        />
        <aside className="research-sidebar">
          <ResearchThemeSidebar deferUntilHeroExit={heroAppearance === "minimal"} pastHero={pastHero} />
        </aside>
      </main>
      <MobileActionDock
        visible={!editingAnswer && (mobileSearchOpen || (pastHero && !footerInView))}
        searchOpen={mobileSearchOpen}
        query={query}
        onSearchOpenChange={setMobileSearchOpen}
        onQueryChange={setQuery}
      />
      <SiteFooter />
    </div>
  )
}
